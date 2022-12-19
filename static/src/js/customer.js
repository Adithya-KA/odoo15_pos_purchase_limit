odoo.define('point_of_sale.PoSPurchaseLimit', function (require) {
    "use strict";
    const ProductScreen = require('point_of_sale.ProductScreen');
    const { Gui } = require('point_of_sale.Gui');
    var models = require('point_of_sale.models');
    var rpc = require('web.rpc');
    const Registries = require('point_of_sale.Registries');
    models.load_fields('res.partner', 'purchase_limit');
    models.load_fields('res.partner', 'purchase_limit_amount');
    const PoSPurchaseLimit = (ProductScreen) =>
    class extends ProductScreen {
    async _onClickPay() {
    var customer = this.currentOrder.get_client();
    console.log(customer)
    var tot_price = this.currentOrder.get_total_with_tax();
    console.log("Order Total: ",tot_price)
    if (customer){
    var limit = customer.purchase_limit_amount
    var enabled = customer.purchase_limit
    var message = 'Sorry! Your purchase limit is '
    console.log("Enabled:", enabled)
    console.log("Limit:", limit)
        if (enabled){
        console.log("Enabled yes")
        if (tot_price > limit){
        Gui.showPopup('ErrorPopup',{
            'title':('Access error'),
            'body':(message + limit)
        })
        }
        else{
            await super._onClickPay()
        }
        }
        else
        {
            await super._onClickPay()
        }
        }
    else{
        Gui.showPopup('ErrorPopup',{
            'title':('Access error'),
            'body':('Please select a Customer..!')
        })
    }
    }
        }
        Registries.Component.extend(ProductScreen, PoSPurchaseLimit);
        return ProductScreen;
    });
