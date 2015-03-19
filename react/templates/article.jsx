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
var Article      = require("../blocks/article/article");
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
                  <Breadcrumbs.Item {...data.breadcrumbs[1]} />
                </Breadcrumbs>
              </Listing.Breadcrumbs>
              <Listing.Title title={data.title} />
            </Listing.Header>
            <Listing.Content>
              <Listing.Main>
                <Article {...data.article} />
              </Listing.Main>
              <Listing.Nav>
                <PreviewItem {...data.goods[0]} />
                <PreviewItem {...data.goods[1]} />
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
