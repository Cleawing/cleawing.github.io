analytics.ready(function(){
  ll('init', '6ea954880eed51314b8ec0c-b4038618-e94b-11e4-b23f-009c5fda0a25', {trackPageView: false, domain: 'cleawing.com'});
});

$(document).ready(function() {
    App.init();
    analytics.page("Landing", "Index");
    
    analytics.trackLink($("#header-navbar a").toArray(), "Clicked Navigation", function(el) {
        return {
            "Kind": "navbar",
            "Source": "top_navbar",
            "url" : $(el)[0].href,
            "TargetText": $(el).text()
        };
    }); 

    analytics.trackLink($("#home a").toArray(), "Clicked Call to Action", function(el) {
        return {
            "Kind": "teaser",
            "Source": "top_teaser",
            "url" : $(el)[0].href,
            "TargetText": $(el).text()
        };
    });

    analytics.trackLink($("#platforms a").toArray(), "Clicked Compute Provider", function(el) {
        return {
            "Kind": "image",
            "Source": "content_block",
            "url" : $(el)[0].href,
            "TargetText": $(el)[0].title
        };
    });
});