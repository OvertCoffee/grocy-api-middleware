class Product {
    constructor(data) {
        this.amount = data.amount ?? null,
        this.amount_aggregated = data.amount_aggregated ?? null,
        this.value = data.value ?? null,
        this.best_before_date = data.best_before_date ?? null,
        this.amount_opened = data.amount_opened ?? null,
        this.amount_opened_aggregated = data.amount_opened_aggregated ?? null,
        this.is_aggregated_amount = data.is_aggregated_amount ?? null,
        this.due_type = data.due_type ?? null,
        this.product_id = data.product_id ?? null,
        this.product = {},
        this.product.id = data.product.id,
        this.product.name = data.product.name,
        this.product.description = data.product.description,
        this.product.product_group_id = data.product.product_group_id,
        this.product.active = data.product.active,
        this.product.location_id = data.product.location_id,
        this.product.shopping_location_id = data.product.shopping_location_id,
        this.product.qu_id_purchase = data.product.qu_id_purchase,
        this.product.qu_id_stock = data.product.qu_id_stock,
        this.product.qu_factor_purchase_to_stock = data.product.qu_factor_purchase_to_stock,
        this.product.min_stock_amount = data.product.min_stock_amount,
        this.product.default_best_before_days = data.product.default_best_before_days,
        this.product.default_best_before_days_after_open = data.product.default_best_before_days_after_open,
        this.product.default_best_before_days_after_freezing = data.product.default_best_before_days_after_freezing,
        this.product.default_best_before_days_after_thawing = data.product.default_best_before_days_after_thawing,
        this.product.picture_file_name = data.product.picture_file_name,
        this.product.enable_tare_weight_handling = data.product.enable_tare_weight_handling,
        this.product.tare_weight = data.product.tare_weight,
        this.product.not_check_stock_fulfillment_for_recipes = data.product.not_check_stock_fulfillment_for_recipes,
        this.product.parent_product_id = data.product.parent_product_id,
        this.product.calories = data.product.calories,
        this.product.cumulate_min_stock_amount_of_sub_products = data.product.cumulate_min_stock_amount_of_sub_products,
        this.product.due_type = data.product.due_type,
        this.product.quick_consume_amount = data.product.quick_consume_amount,
        this.product.hide_on_stock_overview = data.product.hide_on_stock_overview,
        this.product.row_created_timestamp = data.product.row_created_timestamp,
        this.product.default_print_stock_label = data.product.default_print_stock_label,
        this.product.allow_label_per_unit = data.product.allow_label_per_unit,
        this.product.should_not_be_frozen = data.product.should_not_be_frozen
    }
}

function getProducts(data) {
    let products = data.map(guy => {
        return new Product(guy);
    })
    return products;
}

// exports.getProducts = getProducts;
// exports.Product = Product;

module.exports = {
    getProducts: getProducts,
    Product: Product
}
