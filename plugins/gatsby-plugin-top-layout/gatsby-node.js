const path = require('path');
const slash = require('slash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
  query Myquery {
    allWordpressWpLaptop {
      nodes {
        slug
        title
        content
        categories {
          parent_element {
            name
            slug
          }
          name
          slug
        }
        acf {
          available
          price
          image1 {
            alt_text
            source_url
          }
          image2 {
            alt_text
            source_url
          }
          image3 {
            alt_text
            source_url
          }
          image4 {
            alt_text
            source_url
          }
        }
      }
    }
    allWordpressWpOther {
      nodes {
        slug
        title
        content
        categories {
          name
          slug
        }
        acf {
          price
          available
          image1 {
            alt_text
            source_url
          }
          image2 {
            alt_text
            source_url
          }
          image3 {
            alt_text
            source_url
          }
          image4 {
            alt_text
            source_url
          }
        }
      }
    }
  }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  const { allWordpressWpLaptop } = result.data;
  const LaptopDetail = path.resolve('./src/components/template/detail-product/index.js');
  allWordpressWpLaptop.nodes.forEach((node) => {
    const { ...context } = node;
    const brand = context.categories[0].parent_element.slug;
    const series = context.categories[0].slug;
    const name = context.slug;
    createPage({
      path: `/product/${brand}/${series}/${name}`,
      component: slash(
        LaptopDetail,
      ),
      exact: true,
      context: {
        ...context,
        acf: {
          available: context.acf.available,
          price: context.acf.price,
          image: [
            context.acf.image1, context.acf.image2, context.acf.image3, context.acf.image4,
          ].filter((image) => Boolean(image)),
        },
      },
    });
  });
  const { allWordpressWpOther } = result.data;
  allWordpressWpOther.nodes.forEach((node) => {
    const { ...context } = node;
    const category = context.categories[0].slug;
    const name = context.slug;
    createPage({
      path: `/product/${category}/${name}`,
      component: slash(
        LaptopDetail,
      ),
      exact: true,
      context: {
        ...context,
        acf: {
          available: context.acf.available,
          price: context.acf.price,
          image: [
            context.acf.image1, context.acf.image2, context.acf.image3, context.acf.image4,
          ].filter((image) => Boolean(image)),
        },
      },
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path.match(/^\/product\/?\w*$/)) {
    // eslint-disable-next-line no-param-reassign
    page.matchPath = '/product/*';
    // Update the page.
    createPage(page);
  }
};
