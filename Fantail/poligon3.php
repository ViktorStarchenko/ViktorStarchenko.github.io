<div class="row wrapper-1246 full_width default-pb">
    <div class="col-12 col-md-3 p-0">
        <div class="menu_list">
            <?php
            $hide_empty = get_field('hide_empty_categories');
            $terms = get_terms( [
                'taxonomy' => 'food_category',
                'hide_empty' => $hide_empty,
                'orderby'       => 'id',
                'order'         => 'ASC',
            ] ); //Getting the taxonomy object?>



            <?php foreach ($terms as $item) { ?>
                <div class="menu_list__item active">
                    <?php

                    if($item->parent == 0) { ?>
                        <div class="menu_list__title text_underlined">
                            <span class="title-h3"><?php echo $item->name; ?></span>
                        </div>
                    <?php } ?>

                    <?php
                    $termID = $item->term_id; // Get the ID of the taxonomy element
                    $taxonomyName = "food_category";
//                    $termchildren = get_term_children( $termID, $taxonomyName );  // get an array of the parent's children
                    $termchildren = get_terms( [ 'taxonomy' => 'food_category', 'hide_empty' => $hide_empty, 'child_of' => $item->term_id] );  // get an array of the parent's children
                    if (!empty($termchildren)) { ?>
                        <ul class="menu_list__list">
                            <?php
                            foreach ($termchildren as $child) {
//                                $term = get_term_by( 'id', $child, 'food_category' ); // get the child object ?>
                                <li><a class="menu_list__item-name crane" data-scroll="<?php echo $child->slug ?>" href="#<?php echo $child->slug ?>"><?php echo $child->name ?></a></li>
                            <?php } ?>
                        </ul>
                    <?php } ?>
                </div>
            <?php } ?>
        </div>
    </div>
    <div class="col-12 col-md-9 p-0">
        <div class="menu_content">
            <?php
            $terms = get_terms( [
                'taxonomy' => 'food_category',
                'hide_empty' => $hide_empty,
                'orderby'       => 'id',
                'order'         => 'ASC',
            ] ); //Getting the taxonomy object ?>
            <?php foreach ($terms as $item) {
                $termID = $item->term_id; // Get the ID of the taxonomy element
                $taxonomyName = "food_category";
//                $termchildren = get_term_children( $termID, $taxonomyName );  // get an array of the parent's children
                $termchildren = get_terms( [ 'taxonomy' => 'food_category', 'hide_empty' => $hide_empty, 'child_of' => $item->term_id] );  // get an array of the parent's children
                if (!empty($termchildren)) {

                    foreach ($termchildren as $child) {
//                        $term = get_term_by( 'id', $child, 'food_category' ); // get the child object ?>
                        <div class="menu_content__item">
                            <div class="menu_content__category text_underlined">
                                <span class="" id="<?php echo $child->slug ?>"><?php echo $child->name ?></span>
                            </div>
                            <?php $args = array( // Arguments for fetching posts of elements of this taxonomy
                                'post_type' => 'food_menu',
                                'tax_query' => array(
                                    array(
                                        'taxonomy' => 'food_category',
                                        'field' => 'term_id',
                                        'terms' => $child->term_id
                                    )
                                )
                            ); ?>

                            <div class="menu_content__list">
                                <ul>
                                    <?php $query = new WP_Query( $args ); // Retrieving the items for this taxonomy
                                    if( $query->have_posts() ) {
                                        while ($query->have_posts()) {
                                            $query->the_post(); ?>
                                            <li>
                                                <div class="menu_content__item-box">
                                                    <div class="menu_content__item-info">
                                                        <span class="menu_content__item-name"><?php the_title(); ?></span>
                                                        <span class="menu_content__item-name_add"><?php the_field('food_menu_atributes'); ?></span>
                                                        <div class="menu_content__item-desc">
                                                            <?php the_field('food_menu_description'); ?>
                                                        </div>

                                                    </div>
                                                    <div class="menu_content__item-price"><?php the_field('food_menu_price'); ?></div>

                                                </div>
                                            </li>
                                        <?php } wp_reset_postdata(); // end while ?>
                                    <?php } // end if ?>
                                </ul>
                            </div>
                        </div>


                    <?php } ?>
                <?php } ?>

            <?php } ?>


        </div>
    </div>
</div>


Hi @nikolai_od
I was add Food menu page to staging project.
For this page was created new custom post type "Food menu" and custom taxonomy "food category".

Client now can managing menu items by redacting/adding/deleting "Food menu" posts.
Its pretty easy to do. Each post have only a few fields such as "description", "price" and "attributes"
Also we are need to assign category to every post.

Also we are can hide or show empty categories in menu list.
