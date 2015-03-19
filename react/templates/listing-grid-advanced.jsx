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
var ArticleLead  = require("../blocks/article-lead/article-lead");
var ViewMode     = require("../blocks/view-mode/view-mode");
var PreviewItem  = require("../blocks/preview-item/preview-item");
var Banner       = require("../blocks/banner/banner");
var Categories   = require("../blocks/categories/categories");
var Help         = require("../blocks/help/help");
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
                </Breadcrumbs>
              </Listing.Breadcrumbs>
              <Listing.Title title="Платья бальные" />
              <Listing.Sorting>
                <ArticleLead text={data.article.lead} href={data.article.href} />
              </Listing.Sorting>

            </Listing.Header>
            <Listing.Content>
              <Listing.Main advanced={true}>
                <PreviewItem {...data.goods[0]} />
                <PreviewItem {...data.goods[1]} />
                <Banner {...data.banners[0]} grid={true} />
                <PreviewItem {...data.goods[2]} />
                <Banner {...data.banners[1]} grid={true} />
                <PreviewItem {...data.goods[3]} />
                <PreviewItem {...data.goods[4]} />
                <PreviewItem {...data.goods[5]} />
                <PreviewItem {...data.goods[6]} />
                <PreviewItem {...data.goods[7]} />
                <Banner {...data.banners[2]} grid={true} />
                <PreviewItem {...data.goods[8]} />
                <PreviewItem {...data.goods[9]} />
                <PreviewItem {...data.goods[10]} />
                <PreviewItem {...data.goods[11]} />
              </Listing.Main>
              <Listing.Nav>
                <Categories items={data.categories} />
                <Help {...data.help} />
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
