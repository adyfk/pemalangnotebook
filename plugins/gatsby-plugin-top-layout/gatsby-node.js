/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const slash = require('slash');

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
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
                image1{
                  title
                  description
                  url
                }
                image2{
                  title
                  description
                  url
                }
                image3{
                  title
                  description
                  url
                }
                image4{
                  title
                  description
                  url
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
  const LaptopDetail = path.resolve('./src/components/template/laptop-detail/component.js');
  allWordpressWpLaptop.nodes.forEach((node) => {
    const { ...context } = node;
    const brand = context.categories[0].parent_element.slug;
    const series = context.categories[0].slug;
    const name = context.slug;
    createPage({
      path: `/product/laptop/${brand}-${series}-${name}`,
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
          ],
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
