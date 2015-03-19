var React = require("react");

var data = require("../../data/listing.json");

// Blocks

var Page         = require("../blocks/page/page");
var Header       = require("../blocks/header/header");
var Search       = require("../blocks/search/search");
var Menu         = require("../blocks/menu/menu");
var Content      = require("../blocks/content/content");
var Listing      = require("../blocks/listing/listing");
var Breadcrumbs  = require("../blocks/breadcrumbs/breadcrumbs");
var Sorting      = require("../blocks/sorting/sorting");
var ViewMode     = require("../blocks/view-mode/view-mode");
var PreviewItem  = require("../blocks/preview-item/preview-item");
var Banner       = require("../blocks/banner/banner");
var Categories   = require("../blocks/categories/categories");
var Facets       = require("../blocks/facets/facets");
var Facet        = require("../blocks/facet/facet");
var Price        = require("../blocks/price/price");
var CheckboxList = require("../blocks/checkbox-list/checkbox-list");
var Footer       = require("../blocks/footer/footer");

// Page

var PageList = React.createClass({
  render: function() {
    return (
      <Page>
        <Header>
          <Search {...data.search} />
        </Header>
        <Menu {...data.menu} />
        <Content>
          <Listing>
            <Listing.Header>
              <Listing.Breadcrumbs>
                <Breadcrumbs>
                  <Breadcrumbs.Item {...data.breadcrumbs[0]} />
                  <Breadcrumbs.Item {...data.breadcrumbs[1]} />
                </Breadcrumbs>
              </Listing.Breadcrumbs>
              <Listing.Title title={data.title} />
              <Listing.Sorting>
                <Sorting>
                  <Sorting.Item {...data.sorting[0]} current={true} />
                  <Sorting.Item {...data.sorting[1]} />
                  <Sorting.Item {...data.sorting[2]} />
                </Sorting>
              </Listing.Sorting>
              <Listing.ViewMode>
                <ViewMode>
                  <ViewMode.Item {...data.viewMode[0]} />
                  <ViewMode.Item {...data.viewMode[1]} current={true} />
                </ViewMode>
              </Listing.ViewMode>
            </Listing.Header>
            <Listing.Content>
              <Listing.Main>
                <PreviewItem {...data.goods[0]} />
                <PreviewItem {...data.goods[1]} />
                <PreviewItem {...data.goods[2]} />
                <Banner {...data.banners[0]} />
                <PreviewItem {...data.goods[3]} />
                <PreviewItem {...data.goods[4]} />
                <PreviewItem {...data.goods[5]} />
                <Banner {...data.banners[1]} />
                <PreviewItem {...data.goods[6]} />
                <PreviewItem {...data.goods[7]} />
                <PreviewItem {...data.goods[8]} />
                <Banner {...data.banners[2]} />
                <PreviewItem {...data.goods[9]} />
                <PreviewItem {...data.goods[10]} />
                <PreviewItem {...data.goods[11]} />
              </Listing.Main>
              <Listing.Nav>
                <Categories items={data.categories} />
                <Facets>
                  <Facet title={data.facets[0].title} closed={data.facets[0].closed}>
                    <Price {...data.facets[0].content} />
                  </Facet>
                  <Facet title={data.facets[1].title} closed={data.facets[1].closed}>
                    <CheckboxList {...data.facets[1].content} />
                  </Facet>
                  <Facet title={data.facets[2].title} closed={data.facets[2].closed}>
                    <CheckboxList {...data.facets[2].content} />
                  </Facet>
                </Facets>
              </Listing.Nav>
            </Listing.Content>
          </Listing>
        </Content>
        <Menu items={data.menu.items} />
        <Footer />
      </Page>
    );
  }
});

module.exports = PageList;
