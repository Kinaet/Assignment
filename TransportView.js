/*--- transport View ---*/
 
"use strict";
 
Ext.define('CityApp.view.transport.TransportView', {
    extend: 'Ext.panel.Panel',
    xtype: 'transportview',
 
    requires: [
        'CityApp.view.transport.TransportController'
    ],
 
    itemId: 'transport_view',
    id: 'transport_view',
 
    controller: 'transport-main',
 
    border: false,
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },    
 
    items: [{
        xtype: 'panel',
        id: 'txp_map_panel',
        layout: 'fit',
        margin:'3 3 3 3',
        flex: 1
    }]
 
});
/*--- ---*/