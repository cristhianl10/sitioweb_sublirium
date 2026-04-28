const fs = require('fs');

const data = {
"Jarro blanco 11 oz AAA": "¡Despierta sonrisas cada mañana! Tu diseño favorito en nuestro clásico jarro premium. Disfruta de un envío rápido y seguro para que tus momentos especiales lleguen a tiempo. Calidad garantizada.",
"Jarro negro 11 oz AAA": "¡Dale un toque de elegancia a tus recuerdos! Nuestro jarro negro premium resalta tus diseños más especiales. Recíbelo de forma rápida y 100% segura directo en tus manos.",
"Jarro mágico negro": "¡Sorprende a esa persona especial! Observa cómo la magia revela tu diseño con cada bebida caliente. Compra con total confianza y recíbelo rápidamente con nuestro envío seguro.",
"Jarro mágico negro cóncavo con cuchara": "¡El regalo perfecto que incluye todo! Un diseño cóncavo único que cobra vida con el calor. Garantizamos una entrega rápida y segura para que disfrutes sin preocupaciones.",
"Jarro mágico rojo": "¡Enamora con cada detalle! El vibrante color rojo oculta una sorpresa que se revela con el calor. Emoción asegurada con envío rápido y protección total en tu compra.",
"Jarro mágico azul": "¡Haz que cada café sea inolvidable! Un hermoso efecto mágico en color azul para tus mejores fotos. Compra hoy y recibe rápido y seguro gracias a nuestro envío de confianza.",
"Tazas coloridas": "¡Llena tus días de alegría y color! Elige el interior que mejor combine con tu diseño favorito. Compra con tranquilidad: te lo entregamos rápido y con total seguridad.",
"Termo blanco de aluminio 350ml": "¡Lleva tus mejores momentos a donde vayas! Mantén tus bebidas perfectas en este termo práctico y personalizado. Envío rápido y seguro garantizado para tu tranquilidad.",
"Termo degradado azul con sensor térmico": "¡Tecnología y estilo en tus manos! Controla la temperatura de tu bebida con un toque único. Compra con confianza y recíbelo súper rápido con protección total.",
"Termo degradado rosa con sensor térmico": "¡El accesorio perfecto que te acompaña! Diseño elegante con sensor térmico para tu día a día. Disfruta de una entrega rápida y 100% segura directo a tu puerta.",
"Vaso térmico de aluminio blanco degradado": "¡Refresca tu estilo con un diseño espectacular! Personaliza este vaso degradado y sé el centro de atención. Compra segura con entrega rápida para que no esperes de más.",
"Vaso térmico de aluminio blanco": "¡Tu bebida favorita siempre a la temperatura ideal! Un clásico indispensable que puedes hacer único. Siente la seguridad de recibirlo rápido y en perfectas condiciones.",
"Tomatodo de Aluminio 750ml Blanco Doble Tapa": "¡Alcanza tus metas con la mejor hidratación! Gran capacidad y resistencia para tu ritmo de vida. Lo enviamos rápido y seguro para que empieces a usarlo cuanto antes.",
"Tomatodo de Aluminio 750ml Plomo Doble Tapa": "¡Elegancia y resistencia en cada entrenamiento! Mantente hidratado con este diseño premium. Compra con total tranquilidad, te lo entregamos rápido y protegido.",
"Tomatodo de Aluminio 750ml Blanco Deportivo": "¡Tu compañero ideal para la aventura! Diseño ergonómico perfecto para gente activa como tú. Envío veloz y compra protegida para tu mayor comodidad.",
"Tomatodo de Aluminio 600ml Blanco Doble Tapa": "¡El equilibrio perfecto para tu día a día! Llévalo contigo a todas partes con tu diseño favorito. Compra confiable con entrega rápida para tu total satisfacción.",
"Tomatodo de Aluminio 500ml Plomo Doble Tapa": "¡Practicidad y estilo urbano! El tamaño ideal para tus rutinas diarias y salidas cortas. Siente la emoción de recibirlo rápido y seguro en la puerta de tu hogar.",
"Tomatodo de Aluminio 500ml Blanco Doble Tapa": "¡Mantén tu energía siempre al máximo! Compacto, personalizable y perfecto para el gimnasio o la oficina. Garantizamos una entrega rápida y sin contratiempos.",
"Botella de Aluminio Térmico 500ml": "¡Protege tus bebidas y tus recuerdos! Tecnología térmica para disfrutar donde quieras. Emociónate al recibirlo rápidamente con nuestro envío totalmente seguro.",
"Camiseta blanca sublimada": "¡Viste tus mejores ideas y destaca! Confort premium y colores vibrantes que no se borran. Compra con confianza: te la enviamos rápido y con seguridad garantizada.",
"Camiseta de algodón manga corta en DTF": "¡Siente la suavidad de un diseño único! Algodón premium con un estampado espectacular. Disfruta de una compra 100% segura y una entrega rápida en tus manos.",
"Gorra sublimable": "¡Completa tu estilo y protégete del sol! Personalízala a tu gusto para lucir increíble. Compra hoy y siente la tranquilidad de nuestro envío veloz y seguro.",
"Mousepad de corazón": "¡Demuestra tu amor en cada clic! El detalle romántico perfecto para esa persona especial. Sorpréndela a tiempo con nuestra entrega súper rápida y protegida.",
"Mousepad rectangular 18 x 22 cm": "¡Haz de tu espacio de trabajo un lugar inspirador! Calidad premium para tus diseños más vibrantes. Compra seguro y recíbelo rápido para renovar tu setup hoy mismo.",
"Lámina de aluminio A4": "¡Inmortaliza tus logros y recuerdos más preciados! Acabado brillante y profesional para decorar con elegancia. Envío rápido y cuidadoso para proteger tu compra al máximo.",
"Lámina de aluminio A4 (2)": "¡Dale vida a tus espacios con calidad premium! Perfecta para señalética o decoración que durará toda la vida. Compra con confianza, tu entrega rápida y segura está garantizada.",
"Bolso cambrela A3": "¡Lleva todo lo que necesitas con estilo propio! Espacioso, resistente y 100% personalizable. Siente la seguridad de una entrega rápida para empezar a usarlo ya.",
"Bolso cambrela A5": "¡Práctico, compacto y con tu toque personal! Ideal para llevar lo esencial a todas partes. Compra protegida y entrega veloz para tu mayor tranquilidad.",
"Reloj alarma": "¡Despierta cada día con tus mejores recuerdos! Dale un toque personal y único a tus mañanas. Recíbelo rápido y seguro para empezar a disfrutarlo sin demoras.",
"Portarretrato reloj de vidrio blanco": "¡El tiempo se detiene en tus momentos más felices! Elegancia pura para exhibir tus fotos favoritas. Compra con total seguridad y recíbelo rápidamente en tu hogar.",
"Libreta roja": "¡Apunta tus más grandes sueños y metas! Inspiración en cada página con tu diseño en la portada. Emociónate al recibirla rápido y con nuestro envío totalmente seguro.",
"Libreta blanca": "¡El lienzo perfecto para tus mejores ideas! Personalízala y llévala a todas tus reuniones. Garantizamos tu tranquilidad con una entrega rápida y protegida.",
"Llavero personalizado forma circular": "¡Lleva siempre contigo a los que más amas! Un detalle resistente y emotivo para tu día a día. Compra seguro y sorpréndete con lo rápido que llega a tus manos.",
"Llavero personalizado forma de casa": "¡Celebra tus nuevos comienzos y logros! El recuerdo perfecto para tu nuevo hogar o proyecto. Envío rápido y compra 100% protegida para tu confianza.",
"Llavero cuadrado metálico": "¡Elegancia y resistencia en la palma de tu mano! Un detalle premium para acompañar tus llaves. Siente la seguridad de una entrega rápida y sin problemas.",
"Portarretrato bambú rombo": "¡Dale un toque ecológico y único a tus recuerdos! Diseño exclusivo que resaltará en cualquier espacio. Compra con total confianza y recibe tu pedido súper rápido.",
"Portarretrato bambú rectangular": "¡La calidez de la naturaleza abrazando tus fotos! Un clásico elegante y sustentable para regalar. Garantizamos un envío seguro y veloz para tus momentos especiales.",
"Forro de almohada personalizado": "¡Abraza tus recuerdos cada noche! Suavidad incomparable para decorar y descansar mejor. Siente la tranquilidad de nuestra compra segura y entrega rápida.",
"Plato sublimado personalizado": "¡Convierte tus fotos en verdaderas obras de arte! Decoración elegante y original para tu hogar. Emociónate al recibirlo rápido y protegido, directo a tu puerta."
};

let content = fs.readFileSync('index.html', 'utf8');

// Replace using regex
for (const [name, desc] of Object.entries(data)) {
  const regex = new RegExp(`(data-name="${name}"[\\s\\S]*?data-desc=")([^"]+)(")`, 'g');
  content = content.replace(regex, `$1${desc}$3`);
}

fs.writeFileSync('index.html', content);
console.log("Updated descriptions.");
