from odoo import fields, models


class PurchaseLimit(models.Model):
    _inherit = 'res.partner'

    purchase_limit = fields.Boolean('Purchase Limit')
    purchase_limit_amount = fields.Float('Purchase Limit Amount')
