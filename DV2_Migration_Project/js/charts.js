const embedOptions = {
  actions: false
};


vegaEmbed("#map_state", "vis/01_map_state.vg.json", embedOptions);
vegaEmbed("#line_total_migration", "vis/02_line_total_migration.vg.json", embedOptions);
vegaEmbed("#stacked_area_status", "vis/03_stacked_area_status.vg.json", embedOptions);


vegaEmbed("#bar_top_countries", "vis/04_bar_top_countries.vg.json", embedOptions);
vegaEmbed("#line_regions", "vis/05_line_regions.vg.json", embedOptions);
vegaEmbed("#lollipop_region_growth", "vis/06_lollipop_region_growth.vg.json", embedOptions);


vegaEmbed("#population_pyramid", "vis/07_population_pyramid.vg.json", embedOptions);
vegaEmbed("#butterfly_age_change", "vis/08_butterfly_age_change.vg.json", embedOptions);


vegaEmbed("#stacked_bar_visa", "vis/09_stacked_bar_visa.vg.json", embedOptions);
vegaEmbed("#heatmap_temp_visa", "vis/10_heatmap_temp_visa.vg.json", embedOptions);
