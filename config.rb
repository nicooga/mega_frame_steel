set :css_dir, "styles"
set :js_dir, "scripts"
set :images_dir, "images"
set :layout, false

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :minify_javascript
end

after_configuration do
  sprockets.append_path File.join("#{root}", "vendor/assets/bower")
end

# Needeed to reference assets on gh-pages
activate :relative_assets
set :relative_links, true

set :advantages, [{
  title: 'Óptima relacion costo/calidad',
  text: 'Ya sea para una construcción nueva, ampliación o una simple reforma, el sistema STEEL FRAMING es una excelente opción porque se adapta a cualquier diseño o arquitectura y material, permitiendo una óptima relación costo/calidad.',
  icon_name: 'money'
},
{
  title: 'Menos desperdicio',
  text: 'La construcción es precisa, eficiente y más limpia, permitiendo realizar el prefabricado en taller o en obra sin depender del uso de maquinaria pesada. Permite mayor control de los materiales y menor desperdicio.',
  icon_name: 'ecology'
},{
  title: 'Ahorro de energìa',
  text: 'El sistema constructivo cumple con la Ley 13059 para acondicionamiento térmico, logrando una aislación térmica y acústica mayor que las construcciones tradicionales. Otorgamos un mejor confort en el interior de la vivienda y reduciendo el consumo de energía.',
  icon_name: 'energy'
},{
  title: 'Rápidez',
  text: 'Se reduce el tiempo de obra debido a la rapidez del montaje de los componentes, teniendo una importante reducción de los costos.',
  icon_name: 'time'
}]

set :services, [{
  title: 'Remodelaciones',
  description: 'Tabiques, divisiones de interior, cielorrasos, placas de yeso, revestimientos, pisos flotantes, molduras de interior y exterior, instalación de aberturas en general (madera, aluminio, PVC), ampliaciones.',
  image_name: 'remodelacion.jpg'
}, {
  title: 'Proyectos',
  description: 'Arquitectura, ingeniería, planos, servicio de topografía, venta y alquiler de obrador, perforación para captación de agua, cerco de obra, bases y plateas de hormigón.',
  image_name: 'proyectos.jpg'
}, {
  title: 'Steel Framing',
  description: 'Diseño y cálculo de estructuras, ingeniería de detalle, planos de taller, computo de materiales, fabricación y montaje, dirección de obra.',
  image_name: 'steel_framing.jpg'
},{
  title: 'Además',
  description: 'Tambien realizamos: trabajos de electricidad, plomeria, instalaciones de gas, herreria, portones automaticos, aire acondicionado, y venta o alquiler de grupos electrógnenos.',
  image_name: 'ademas.jpg'
}]
