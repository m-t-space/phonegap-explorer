window.EventsView = Backbone.View.extend({

    initialize: function () {
        _.bindAll(this);
        var self = this;
        this.render();

        document.addEventListener('deviceready', this.deviceHandler, false);
        document.addEventListener("pause", this.pauseHandler, false);
        document.addEventListener("resume", this.resumeHandler, false);
	document.addEventListener('menubutton', this.menuHandler, false);
	document.addEventListener('backbutton', this.backHandler, false);
	document.addEventListener('searchbutton', this.searchHandler, false);
        document.addEventListener("online", this.onlineHandler, false);
        document.addEventListener("offline", this.offlineHandler, false);
	document.addEventListener('localechange', this.localeHandler, false);
        document.addEventListener("batterystatus", this.batterystatusHandler, false);
        document.addEventListener("batterylow", this.batterylowHandler, false);
        document.addEventListener("batterycritical", this.batterycriticalHandler, false);
	document.addEventListener("startcallbutton", this.startcallHandler, false);
        document.addEventListener("endcallbutton", this.endcallHandler, false);
        document.addEventListener("volumeupbutton", this.volUpHandler, false);
        document.addEventListener("volumedownbutton", this.volDownHandler, false);
        document.addEventListener("webOSLaunch", this.launchHandler, false);
        document.addEventListener("webOSRelaunch", this.relaunchHandler, false);
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },

    log: function(msg) {
        $('#log').val($('#log').val() + msg + "\r\n");
    },

    logListener: function(name) {
        
    },

    pauseHandler: function() {
        this.log('pause');
    },

    resumeHandler: function() {
        this.log('resume');
    },

    onlineHandler: function() {
        this.log('online');
    },

    offlineHandler: function() {
        this.log('offline');
    },

    batterystatusHandler: function() {
        this.log('batterystatus');
    },

    batterylowHandler: function() {
        this.log('batterylow');
    },

    batterycriticalHandler: function() {
        this.log('batterycritical');
    },

    startcallHandler: function() {
        this.log('startcallbutton');
    },
    
    endcallHandler: function() {
            this.log('endcallbutton');
    },

    menuHandler: function() {
        this.log('menubutton');
    },
    
    backHandler: function() {
        this.log('backbutton');
    },
    
    deviceHandler: function() {
        this.log('deviceready');
    },
    
    localeHandler: function() {
        this.log('localechange');
    },
    
    volUpHandler: function() {
        this.log('volumeupbutton');
    },

    volDownHandler: function() {
        this.log('volumedownbutton');
    },
    
    searchHandler: function() {
        this.log('searchbutton');
    },
    
    launchHandler: function() {
            this.log('webOSLaunch');
    },
        
    relaunchHandler: function() {
            this.log('webOSRelaunch');
    },

    close: function() {
        document.removeEventListener('pause', this.pauseHandler);
        document.removeEventListener('resume', this.resumeHandler);
        document.removeEventListener('online', this.onlineHandler);
        document.removeEventListener('offline', this.offlineHandler);
        document.removeEventListener('menubutton', this.menuHandler);
        document.removeEventListener('backbutton', this.backHandler);
        document.removeEventListener('searchbutton', this.searchHandler);
        document.removeEventListener('localechange', this.localeHandler);
        document.removeEventListener('deviceready', this.deviceHandler);
        document.removeEventListener('batterystatus', this.batterystatusHandler);
        document.removeEventListener('batterylow', this.batterylowHandler());
        document.removeEventListener('batterycritical', this.batterycritical);
        document.removeEventListener('startcallbutton', this.startcall);
        document.removeEventListener('endcallbutton', this.endcall);
        document.removeEventListener("volumeupbutton", this.volUpHandler);
        document.removeEventListener("volumedownbutton", this.volDownHandler);
        document.removeEventListener("webOSLaunch", this.launchHandler);
        document.removeEventListener("webOSRelaunch", this.relaunchHandler);
    }

});
