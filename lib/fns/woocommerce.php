<?php

// REMOVE ADD TO CART MESSAGE
remove_action( 'woocommerce_before_single_product', 'woocommerce_output_all_notices', 10 );
