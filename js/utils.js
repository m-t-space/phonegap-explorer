// The Template Loader. Used to asynchronously load templates located in separate .html files
window.templateLoader = {

    templates: {},

    load: function(views, callback) {

        var deferreds = [];

        var self = this;

        $.each(views, function(index, view) {
                deferreds.push($.get('tpl/' + view + '.html', function(data) {
                    if (window[view]) {
                        window[view].prototype.template = _.template(data);
                    }
                    self.templates[view] = data;
                }, 'html'));
        });

        $.when.apply(null, deferreds).done(callback);
    }

};

function showAlert(message, title) {
    if (navigator.notification && navigator.notification.showToast) {
        /*navigator.notification.alert(
            message,
            null, // callback
            title,
            'OK' // Button label
        );*/
        navigator.notification.showToast({
            message: message,
            icon: "/usr/palm/applications/org.apache.cordova.webos/icon.png"
        }, function() {});
    } else {
        alert(title + ": " + message);
    }
}