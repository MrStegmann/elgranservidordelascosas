export default `
<h2>Atributos y Talentos</h2>

<p>
  Los atributos son las estadísticas principales del personaje. Cada atributo posee talentos propios
  que definirán las cualidades específicas del personaje.
</p>

<p>
  Por cada 1 punto de atributo, se otorgan 2 puntos de talento para esa rama.
</p>

<p>
  Los talentos son especialidades dentro de cada atributo. Los puntos de talentos son únicos
  para la rama del atributo y no puedes usar un punto de talento de Fuerza en un talento de
  Destreza ni viceversa.
</p>

<p>
  No tener ningún punto en algún atributo o talento no te incapacita para hacer algo en concreto.
</p>

<h3>Destreza (DES)</h3>

<p>
  La destreza es una medida de equilibrio, precisión física y agilidad.
  Está más orientada a personajes ágiles o asesinos.
</p>

<ul>
  <li>
    <strong>Armas a distancia ligeras (ADL)</strong>
    <ul>
      <li>
        Habilidad en el uso de arcos, ballestas de una mano, pistolas, así como lanzar
        objetos o armas ligeras (dagas, tomahawks, etc.).
      </li>
    </ul>
  </li>

  <li>
    <strong>Armas finas (AF)</strong>
    <ul>
      <li>
        Manejo de armas rápidas y ligeras como estoques, espadas cortas y dagas.
      </li>
    </ul>
  </li>

  <li>
    <strong>Acrobacias (Ac)</strong>
    <ul>
      <li>Destreza en acciones de parkour y mantener el equilibrio.</li>
      <li>Los ataques desarmados se benefician de este talento.</li>
    </ul>
  </li>

  <li>
    <strong>Sigilo (Si)</strong>
    <ul>
      <li>
        Capacidad de pasar inadvertido y aprovechar los lugares ocultos para no ser visto,
        no ser escuchado y no dejar rastro.
      </li>
      <li>El sigilo no te hace invisible.</li>
    </ul>
  </li>

  <li>
    <strong>Juego de manos (JdM)</strong>
    <ul>
      <li>
        Habilidad para robar, usar ganzúas y trucos, desarmar a tu oponente o evitar ser desarmado.
      </li>
    </ul>
  </li>

  <li>
    <strong>Defensa ágil (DA)</strong>
    <ul>
      <li>
        Capacidad de esquivar o desviar ataques. Permite reposicionarse durante la defensa
        sin perder ninguna acción de movimiento si se tiene éxito.
      </li>
    </ul>
  </li>
</ul>
<hr>

<h3>Fuerza (FUE)</h3>
<p>La fuerza es un atributo que permite al personaje realizar acciones más brutas que ágiles. Está orientada a personajes como bárbaros o guerreros.</p>

<ul>
  <li>
    <strong>Armas a distancia pesadas (ADP)</strong>
    <p>Capacidad de usar armas a distancia pesadas que requieren ambas manos (cañones de mano, trabucos, rifles, ballestas pesadas), además de armas de asedio o defensa (cañones, balistas, catapultas). También lanzar objetos voluminosos o armas grandes (hachas, espadas, etc.).</p>
  </li>

  <li>
    <strong>Armas cuerpo a cuerpo 2 manos (AC2)</strong>
    <p>Habilidad para blandir con eficiencia armas que requieren ser empuñadas con dos manos.</p>
  </li>

  <li>
    <strong>Armas cuerpo a cuerpo 1 mano (AC1)</strong>
    <p>Uso de armas que se empuñan con una mano pero requieren cierta fuerza y no son tan rápidas como las armas finas (espadas, hachas, martillos).</p>
  </li>

  <li>
    <strong>Atletismo (At)</strong>
    <p>Capacidad para realizar acciones como escalar, correr sin cansarse o nadar largas distancias.</p>
  </li>

  <li>
    <strong>Brutalidad (Br)</strong>
    <p>Realizar acciones brutales como romper una puerta a golpes, destruir objetos (mesas, sillas), volcar o levantar objetos muy pesados, y transportar cargas extremadamente pesadas. Los ataques desarmados se benefician de este talento. Los druidas en forma animal y los monjes se benefician directamente de este atributo.</p>
  </li>

  <li>
    <strong>Defensa robusta (DR)</strong>
    <p>Capacidad de defenderse bloqueando ataques con escudo o parando golpes. Esta forma de defensa no permite reposicionarse.</p>
  </li>
</ul>

<hr>

<h3>Inteligencia (INT)</h3>
<p>Afecta al conocimiento sobre el uso de hechizos mágicos, a comprender su funcionamiento y a detectar magia u otras energías.</p>

<ul>
  <li>
    <strong>Arcano (Arc)</strong>
    <p>Conocimiento sobre la magia arcana y sus usos (incluye piromancia y criomancia). Mejora la detección de magia arcana y puede aprovechar energía mágica residual del entorno o de fuentes como piedras de maná u otros personajes.</p>
    <p><em>Nota:</em> El máster determinará la cantidad de magia residual del entorno. Obtener maná de otros personajes puede acarrear consecuencias.<sup><a href="#cmnt1">[a]</a></sup></p>
  </li>

  <li>
    <strong>Vil (Vil)</strong>
    <p>Conocimiento sobre la magia vil y sus usos (invocación de demonios, conocimiento sobre éstos). Mejora la detección de magia vil y puede aprovechar la energía de almas atrapadas en piedras de alma en lugar de gastar su propio maná.</p>
    <p><em>Nota:</em> Las almas y las piedras deben obtenerse; el maná aprovechable dependerá del nivel del alma atrapada (p. ej. almas de nivel 1: 10 de maná base).<sup><a href="#cmnt2">[b]</a></sup></p>
  </li>

  <li>
    <strong>Naturaleza (Nat)</strong>
    <p>Conocimiento sobre la magia de la naturaleza y sus usos. No engloba la comunicación con animales o con el bosque. Mejora la detección de magia natural y puede aprovechar la energía de bosques y plantas en lugar de usar su propio maná.</p>
    <p><em>Nota:</em> Si hay flora suficiente en un radio de 50 m, podrá aprovecharse su energía; el máster determinará la cantidad disponible.<sup><a href="#cmnt3">[c]</a></sup></p>
  </li>

  <li>
    <strong>Sombras (Som)</strong>
    <p>Conocimiento sobre la magia de sombras (incluye el vacío). Mejora la detección de magia de sombra y puede recurrir al vacío para aprovechar energías en lugar de gastar su propio maná.</p>
    <p><em>Advertencia:</em> Esta acción acarrea consecuencias para el personaje.<sup><a href="#cmnt4">[d]</a></sup></p>
  </li>

  <li>
    <strong>Astral (Ast)</strong>
    <p>Conocimiento sobre la magia astral y sus usos (incluye druidas equilibrio). Mejora la detección de magia astral y puede aprovechar la energía de los astros (estrellas, luna, sol) para gastar menos maná.</p>
    <p><em>Ejemplo:</em> Reduce a la mitad el maná gastado en hechizos si se dan las condiciones correctas (p. ej. un hechizo de FUEGO LUNAR se aprovecha mejor de noche con la Luna visible).<sup><a href="#cmnt5">[e]</a></sup></p>
  </li>

  <li>
    <strong>Nigromántico (Nig)</strong>
    <p>Conocimiento sobre la magia nigromántica y sus usos (alzar/controlar no-muertos, magia drust, enfermedades, muerte). Mejora la detección de magia nigromántica y puede robar energía de seres vivos cercanos en lugar de gastar su propio maná.</p>
    <p><em>Capacidad especial:</em> Puede drenar el maná de todo ser vivo en un radio de 20 metros.<sup><a href="#cmnt6">[f]</a></sup></p>
  </li>
</ul>

<hr>

<h3>Voluntad (VOL)</h3>
<p>Afecta la capacidad de comunicarse con los elementos, el espíritu interior, acudir a la Luz o Elune y la resistencia a la magia o a la pérdida de control.</p>

<ul>
  <li>
    <strong>Resistencia mágica (RM)</strong>
    <p>Reduce el daño mágico recibido: por cada 1 punto, reduce 1 punto de daño hasta un mínimo de 1 (no puede reducir a 0). No tiene efecto si el daño es mitigado por armadura. Valores negativos implican recibir daño adicional y efectos negativos.</p>
  </li>

  <li>
    <strong>Resistencia a la pérdida de control (RePC)</strong>
    <p>Aumenta la capacidad para mantener el control frente a fuentes naturales (ej. instinto de druidas transformados) o mágicas (control mental), incluyendo efectos de alquimia; también influye en lo fácil que es provocar al personaje.</p>
  </li>

  <li>
    <strong>Fe</strong>
    <p>Incrementa la capacidad de contactar con la Luz o Elune y que estas respondan. Habilita el uso de hechizos de la Luz/Elune.</p>
  </li>

  <li>
    <strong>Conexión elemental (CE)</strong>
    <p>Aumenta la capacidad de contactar con los elementos y usar sus poderes.</p>
  </li>

  <li>
    <strong>Chi</strong>
    <p>Potencia el uso del espíritu interior y el aprovechamiento de elementos para potenciar capacidades físicas.</p>
  </li>

  <li>
    <strong>Regeneración de maná (RdM)</strong>
    <p>Aumenta la regeneración de maná por turno.</p>
  </li>
</ul>

<hr>

<h3>Constitución (CON)</h3>
<p>Determina la vitalidad y la resistencia del personaje frente a derribos, aturdimientos, su resiliencia y capacidad para absorber daño.</p>

<ul>
  <li>
    <strong>Vida (HP)</strong>
    <p>Incrementa la vida máxima en +1 por punto.</p>
  </li>

  <li>
    <strong>Resiliencia (Re)</strong>
    <p>Aumenta la resistencia a venenos y enfermedades naturales. Llegar a -5 en este talento hace al personaje <em>débil</em> frente a venenos y enfermedades.</p>
  </li>

  <li>
    <strong>Resistencia a aturdimientos (ReA)</strong>
    <p>Aumenta la resistencia a ser aturdido. Tener +5 anula aturdimientos de 1 turno y reduce a la mitad los demás; llegar a -5 te hace <em>débil</em> frente a aturdimientos.</p>
  </li>

  <li>
    <strong>Resistencia a derribos (ReD)</strong>
    <p>Aumenta la resistencia a ser derribado por golpes, terreno, empujes o hechizos. Tener +5 permite incorporarse sin gasto de acción; -5 te hace <em>débil</em> frente a derribos.</p>
  </li>

  <li>
    <strong>Resistencia al frío (ReF)</strong>
    <p>Aumenta la resistencia al frío ambiental y a hechizos de escarcha. Tener +3 anula daño por frío ambiental; -5 te hace <em>débil</em> al frío.</p>
  </li>

  <li>
    <strong>Resistencia al calor (ReC)</strong>
    <p>Aumenta la resistencia al calor ambiental y a hechizos de fuego. Tener +3 anula daño por calor ambiental; -5 te hace <em>débil</em> al calor.</p>
  </li>

  <li>
    <strong>Fortaleza (Fo)</strong>
    <p>Reduce el daño recibido directamente: por cada 1 punto reduce 1 punto de daño hasta un mínimo de 1 (no puede reducir a 0). No funciona si el daño está mitigado por armadura. Valores negativos implican recibir daño adicional y efectos negativos.</p>
  </li>
</ul>

<hr>

<h3>Sabiduría (SAB)</h3>
<p>Determina la intuición, sentido común, profesiones y capacidades perceptivas/comunicativas.</p>
<p>Este atributo afecta artesanía, percepción, comprensión e intuición. Las profesiones y cada idioma cuentan como talentos (excepto el idioma nativo por lore). Máximo de 2 idiomas dominados.</p>

<ul>
  <li>
    <strong>Profesiones (Pr)</strong>
    <p>Conocimiento en una profesión concreta; puedes repartir puntos de Sabiduría en una o varias profesiones. Consulta la sección de Profesiones para la lista completa.</p>
  </li>

  <li>
    <strong>Conexión con los animales (CAn)</strong>
    <p>Capacidad para comprender y comunicarse con fauna de forma no mágica.</p>
  </li>

  <li>
    <strong>Conexión con la naturaleza (CNa)</strong>
    <p>Capacidad para comprender y comunicarse con la flora.</p>
  </li>

  <li>
    <strong>Supervivencia (Su)</strong>
    <p>Orientación, rastreo, pesca, primeros auxilios improvisados, encender fuego, adaptabilidad y preparación de trampas.</p>
  </li>

  <li>
    <strong>Percepción (Per)</strong>
    <p>Obtención de información mediante los sentidos (oído, vista, olfato y gusto).</p>
  </li>

  <li>
    <strong>Idiomas</strong>
    <p>Capacidad para hablar y comprender idiomas. Cada jugador puede dominar hasta 2 idiomas.</p>
  </li>
</ul>

<hr>

<h3>Carisma (CAR)</h3>
<p>Influye en el trato con NPC; no afecta directamente a otros jugadores.</p>
<p>Las tiradas sociales se comparan contra el talento equivalente del NPC (p. ej. persuadir vs. persuasión del NPC). La provocación se enfrenta a la Resistencia a la pérdida de control.</p>
<p>Ganar una tirada no obliga al NPC a realizar acciones imposibles (ej.: un soldado leal no matará al rey aunque se le persuada).</p>

<ul>
  <li>
    <strong>Persuasión (Pes)</strong>
    <p>Inducir o convencer a un NPC para que crea o haga algo por razones.</p>
  </li>

  <li>
    <strong>Diplomacia (Dip)</strong>
    <p>Construir y mantener relaciones; negociar con tacto y respeto.</p>
  </li>

  <li>
    <strong>Comercio (Com)</strong>
    <p>Conseguir mejores resultados en compras, ventas o intercambios; convencer a comprar/vender o intercambiar.</p>
  </li>

  <li>
    <strong>Provocación (Pro)</strong>
    <p>Inducir a un NPC a atacar.</p>
  </li>

  <li>
    <strong>Seducción (Sed)</strong>
    <p>Atracción y posible enamoramiento de NPC.</p>
  </li>
</ul>


`;
