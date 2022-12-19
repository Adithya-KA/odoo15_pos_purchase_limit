{
    'name': 'Purchase Limit',
    'category': 'Pos/product_owner',
    'description': 'PoS Purchase Limit',
    'version': '15.0.0.1.0',
    'depends': ['base', 'point_of_sale', 'contacts'],

    'assets': {
        'point_of_sale.assets': [
            '/pos_purchase_limit/static/src/js/customer.js',
        ],
    },

    'data': [
        'views/purchase_limit_view.xml',

    ],
}
