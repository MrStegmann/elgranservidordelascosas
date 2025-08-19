export default `
<h2>Rasgos</h2>
<p>Los rasgos son características únicas de tu personaje. Estas pueden mejorar ciertos talentos u otorgar cualidades distintivas.</p>
<p>Algunos rasgos positivos poseen tres niveles de mejora que se obtienen con el tiempo a juicio del Máster y del Gremio de Juzgadores de Rasgos. El nivel de tu rasgo siempre será 1.</p>
<p>Si no ves ninguna que cuadre con tu personaje, puedes proponer un rasgo nuevo, el cual se añadiría a esta lista.</p>
<p>Sólo puedes elegir máximo 1 rasgo positivo.</p>
<p>Debes elegir mínimo 1 rasgo negativo.</p>
<p>Aunque elijas más de 1 rasgo negativo, sólo puedes elegir un rasgo positivo. Con el tiempo, puedes adquirir nuevos rasgos positivos y negativos.</p>

<hr>

<h3>Positivos</h3>
<table>
  <tr>
    <td><b>Nombre</b></td>
    <td><b>Descripción</b></td>
    <td><b>Nivel 1</b></td>
    <td><b>Nivel 2</b></td>
    <td><b>Nivel 3</b></td>
  </tr>
  <tr>
    <td>Talentoso</td>
    <td>Mejora un talento de tu elección sin restricciones.</td>
    <td>+1</td>
    <td>+2</td>
    <td>+3</td>
  </tr>
  <tr>
    <td>Atlético/a</td>
    <td>Mejora el talento de Atletismo. Al nivel tres, también mejora Acrobacias</td>
    <td>+1</td>
    <td>+2</td>
    <td>At+2<br>Ac+1</td>
  </tr>
  <tr>
    <td>Robusto/a</td>
    <td>Mejora el talento de DR. Al nivel 3, da un extra de vida.</td>
    <td>+1</td>
    <td>+2</td>
    <td>DR +2<br>HP +5</td>
  </tr>
  <tr>
    <td>Vista aguda</td>
    <td>Mejora la percepción siempre y cuando se realice usando el sentido de la vista. A nivel 3 mejora Armas Distancia.</td>
    <td>+1</td>
    <td>+2</td>
    <td>Per +2<br>ArmD +1</td>
  </tr>
  <tr>
    <td>Inquebrantable</td>
    <td>Mejora el talento de Res. Pér. Control.</td>
    <td>+1</td>
    <td>+2</td>
    <td>+3</td>
  </tr>
  <tr>
    <td>Resiliente</td>
    <td>Mejora el talento de Resiliencia. Al nivel 3, mejora a la Fortaleza.</td>
    <td>+1</td>
    <td>+2</td>
    <td>Re +2<br>For +1</td>
  </tr>
  <tr>
    <td>Ambidiestro/a ágil</td>
    <td colspan="2">Elimina la penalización al nivel 1 de las armas finas. En el resto de niveles, suma al ataque.</td>
    <td>+1</td>
    <td>+2</td>
  </tr>
  <tr>
    <td>Ambidiestro/a robusto</td>
    <td colspan="2">Al nivel 1 reduce a la mitad la penalización por doble empuñadura de armas de 1 y 2 manos.</td>
    <td>+1</td>
    <td>+2</td>
  </tr>
  <tr>
    <td>Ágil</td>
    <td>Mejora el talento de Def. Ágil.<br>A nivel 3, mejora Acrobacias</td>
    <td>+1</td>
    <td>+2</td>
    <td>DA +2<br>Acr +1</td>
  </tr>
  <tr>
    <td>Cabezota</td>
    <td>Mejora el talento de Res. Atur.<br>Al nivel 3, mejora Res. Derr.</td>
    <td>+1</td>
    <td>+2</td>
    <td>ReA+2<br>ReD+1</td>
  </tr>
  <tr>
    <td>Felino/a</td>
    <td>Mejora el talento de Sigilo.<br>Al nivel 3, mejora Juego de Manos.</td>
    <td>+1</td>
    <td>+2</td>
    <td>Sig +2<br>JdM +1</td>
  </tr>
  <tr>
    <td>Preparado/a</td>
    <td>Mejora las tiradas de iniciativa.<br>Al nivel 3, siempre empieza primero.</td>
    <td>+25</td>
    <td>+50</td>
    <td>∞</td>
  </tr>
  <tr>
    <td>Rápido/a</td>
    <td>Reduce la ventaja de los enemigos por flanqueos.</td>
    <td>-1</td>
    <td>-2</td>
    <td>-3</td>
  </tr>
  <tr>
    <td>Abusón/a</td>
    <td>Aumenta el rango de los críticos.</td>
    <td>+1</td>
    <td>+2</td>
    <td>+3</td>
  </tr>
  <tr>
    <td>Sensibilidad mágica</td>
    <td>Mejora las tiradas de percepción mágica.</td>
    <td>+1</td>
    <td>+2</td>
    <td>+3</td>
  </tr>
  <tr>
    <td>Oído agudo</td>
    <td>Mejora el talento de Percepción cuando se realiza utilizando el sentido del oído.</td>
    <td>+1</td>
    <td>+2</td>
    <td>+3</td>
  </tr>
  <tr>
    <td>Visión nocturna</td>
    <td>Reduce la penalización por Oscuridad.</td>
    <td>+1</td>
    <td>+3</td>
    <td>+5</td>
  </tr>
  <tr>
    <td>Suertudo</td>
    <td colspan="4">Una vez por objetivo, si logras hacer un crítico exitoso, puedes atacar o sanar una segunda vez al mismo objetivo. (Se siguen aplicando todas las reglas establecidas para un ataque normal)</td>
  </tr>
  <tr>
    <td>Hechicero</td>
    <td>Mejora un talento de la rama de INT. (Se debe seleccionar).<br>Al nivel 3, reduce el coste de maná de los hechizos de ese talento.</td>
    <td>+1</td>
    <td>+2</td>
    <td>TAL +2<br>Maná -1</td>
  </tr>
  <tr>
    <td>Maestro de armas</td>
    <td>Mejora todos los talentos armas cuerpo a cuerpo. (Sigue aplicándose la penalización por doble empuñadura)</td>
    <td>+1</td>
    <td>+2</td>
    <td>+3</td>
  </tr>
  <tr>
    <td>Bello/a</td>
    <td>Los NPC preferirán tratar contigo antes que cualquier otro.<br>Los NPC se fijarán más en ti.<br>Mejora el talento de Seducción.</td>
    <td>+1</td>
    <td>+2</td>
    <td>+3</td>
  </tr>
  <tr>
    <td>Veloz</td>
    <td colspan="4">No puedes ser objetivo de agarres ni efectos de enraizado.</td>
  </tr>
  <tr>
    <td>Táctico/a</td>
    <td colspan="4">Una vez por ronda, te permite elegir en qué momento actúas, independientemente del órden de los turnos.</td>
  </tr>
  <tr>
    <td>Aventajado/a</td>
    <td colspan="4">Dispone de una acción extra.<br>Se siguen aplicando todas las reglas establecidas para las acciones.</td>
  </tr>
  <tr>
    <td>Corredor/a</td>
    <td>Aumenta la distancia normal de Movimiento del personaje. (Metros).</td>
    <td>+5</td>
    <td>+7</td>
    <td>+10</td>
  </tr>
  <tr>
    <td>Buen aprendiz</td>
    <td colspan="2">Reduce en 1 la dificultad de las tiradas en cada nivel en la categoría de Novato.<br>Obtener el éxito de dificultad seguirá contando como éxito aunque falle en una tirada enfrentada</td>
    <td colspan="2">Al alcanzar la categoría Normal en adelante, ganas más experiencia (a juicio del máster) que los demás.</td>
  </tr>
</table>

<hr>

<h3>Negativos</h3>
<table>
  <tr>
    <td><b>Nombre</b></td>
    <td><b>Descripción</b></td>
    <td colspan="3"><b>Efectos</b></td>
  </tr>
  <tr>
    <td>Inútil</td>
    <td>Penaliza un talento de tu elección sin restricciones.</td>
    <td colspan="3">-3</td>
  </tr>
  <tr>
    <td>Débil</td>
    <td>Penaliza los talentos de Fortaleza y Def. Robusta</td>
    <td colspan="3">Fort -2<br>DR -1</td>
  </tr>
  <tr>
    <td>Enfermizo/a</td>
    <td>Penaliza la resiliencia y la cantidad de vida.</td>
    <td colspan="3">Res -2<br>HP -5</td>
  </tr>
  <tr>
    <td>Ruidoso</td>
    <td>Penaliza el talento de sigilo.</td>
    <td colspan="3">-3</td>
  </tr>
  <tr>
    <td>Despistado</td>
    <td>Penaliza los talentos de Percepción y Percepción Mágica</td>
    <td colspan="3">-3</td>
  </tr>
  <tr>
    <td>Torpe</td>
    <td>Penaliza los talentos de Juego de manos y todos los de Armas</td>
    <td colspan="3">Juego de manos-2<br>Armas -2</td>
  </tr>
  <tr>
    <td>Indeciso</td>
    <td colspan="4">No puede atacar o curar al mismo objetivo dos turnos seguidos</td>
  </tr>
  <tr>
    <td>Vengativo</td>
    <td colspan="4">Hasta que muera el primer enemigo que te ataque, sólo atacarás a ese enemigo.</td>
  </tr>
  <tr>
    <td>Fobia</td>
    <td>Elige un tipo de fobia para el personaje. Cada vez que te enfrentes a tu fobia, recibirás una penalización a todas tus tiradas.</td>
    <td colspan="3">-3</td>
  </tr>
  <tr>
    <td>Cateto/a</td>
    <td>Penaliza todas las tiradas mágicas.</td>
    <td colspan="3">-3</td>
  </tr>
  <tr>
    <td>Sordera</td>
    <td>Penaliza el talento de Percepción siempre que implique el sentido del oído.</td>
    <td colspan="3">-3</td>
  </tr>
  <tr>
    <td>Mentalidad frágil</td>
    <td>Penaliza el talento de Res. Pérdida de control</td>
    <td colspan="3">-3</td>
  </tr>
  <tr>
    <td>Corto de miras</td>
    <td>Penaliza el talento de Percepción siempre que implique el sentido de la vista.<br>Penaliza los ataques a distancia.</td>
    <td colspan="3">Per -2<br>Atq. Dis -2</td>
  </tr>
  <tr>
    <td>Tuerto</td>
    <td>Te falta un ojo.</td>
    <td colspan="3">Per -5<br>AtqD -5</td>
  </tr>
  <tr>
    <td>Miedica</td>
    <td>Penaliza las iniciativas.</td>
    <td colspan="3">Siempre empieza el último.</td>
  </tr>
  <tr>
    <td>Manco</td>
    <td>Le falta una mano o un brazo.</td>
    <td colspan="3">No puede usar doble empuñadura.</td>
  </tr>
  <tr>
    <td>Escuálido/a</td>
    <td>Penaliza los talentos de Brutalidad y DR.<br>Si tu oponente tiene más fuerza que tú, te derribará.</td>
    <td colspan="3">Brut -3<br>DR -2</td>
  </tr>
  <tr>
    <td>Asocial</td>
    <td>Penaliza todas las tiradas de Carisma</td>
    <td colspan="3">-3</td>
  </tr>
  <tr>
    <td>Fanático religioso</td>
    <td colspan="4">Penaliza con 1 todas las tiradas si no se realizan rezos o ritos religiosos. La penalización es acumulativa.<br>Todas las cosas en contra de tu religión te enfurece y puedes volverte hostil.</td>
  </tr>
  <tr>
    <td>Buscado</td>
    <td colspan="4">Siempre que se esté en pueblos o caminos, pueden aparecer mercenarios buscando tu cabeza. El máster tirará 1D100, acto seguido 1D5 para determinar cuántos mercenarios le interceden. (1D100 = <45 aparecen mercenarios)</td>
  </tr>
  <tr>
    <td>Ladrón</td>
    <td colspan="4">Siempre que alguien obtenga una recompensa, deberá tirar por Voluntad + Rest. Per. Control. Deberá superar 14 si no quiere robar. Siempre que tengas la oportunidad, tratarás de robar algo.</td>
  </tr>
  <tr>
    <td>Zopenco</td>
    <td>Penaliza los talentos de Res. Derribos y Aturdimientos</td>
    <td colspan="3">ReD -2<br>ReA -2</td>
  </tr>
  <tr>
    <td>Cobarde</td>
    <td colspan="4">Cada vez que el jugador se vea superado en número de enemigos o una situación que supera sus capacidades (el máster avisará al jugador), quedará aturdido y será incapaz de actuar.<br>Tirará un dado de Voluntad + Res. Perd. Control en su turno y tendrá que superar 15.</td>
  </tr>
  <tr>
    <td>Adicto al maná</td>
    <td colspan="4">Cuando gastes más de la mitad de tu maná, dejarás de hacer cualquier cosa y buscarás desesperadamente recuperarlo.<br>Siempre consumirás el doble (Gemas de maná, comida mágica, fuentes de energía, pociones de maná, etc)</td>
  </tr>
  <tr>
    <td>Ensañamiento</td>
    <td colspan="4">Cuando mates a un enemigo, permanecerás un turno más atacando al cadáver.</td>
  </tr>
  <tr>
    <td>Inmisericorde</td>
    <td colspan="4">Ejecutarás a todos los enemigos sin piedad alguna y sin atender a nada ni nadie. No harás nunca prisioneros ni dejarás a nadie con vida.<br>Para evitar esto, podrás lanzar un d20 VOL + Resistencia a la Pérdida de Control. Si superas o iguales 15 lo evitas.</td>
  </tr>
  <tr>
    <td>Alcohólico/a</td>
    <td colspan="4">Siempre necesitas un trago, sea cual sea la situación, sea cual sea el momento, siempre necesitas beber. Cuando no bebes durante demasiado tiempo, recibes una penalización de -3 a cualquier acción.</td>
  </tr>
  <tr>
    <td>Adefesio</td>
    <td colspan="4">Eres tan feo que de pequeño te ponían a dormir con los cerdos.<br>Los NPC preferirán ignorarte antes que tener una conversación contigo.<br>Serás recordado por lo horrible que eres.<br>-3 a seducción.</td>
  </tr>
  <tr>
    <td>Traidor</td>
    <td colspan="4">No es que tengas nada en contra de tus compañeros, es que los otros pagan mejor.<br>Siempre que se te ofrezca una suma importante para tu personaje, no tendrás dudas a la hora de dejarlos de lado.<br>Elige algo por lo que tu personaje aceptaría sin dudar cambiar de bando.</td>
  </tr>
  <tr>
    <td>Cojera</td>
    <td colspan="4">Reduce a la mitad el Movimiento base del personaje.</td>
  </tr>
  <tr>
    <td>Frágil</td>
    <td>Penaliza el talento de Resistencia Mágica y la efectividad de cualquier defensa mágica.</td>
    <td colspan="3">-2 RM<br>-1 Def. Mágica con hechizos.</td>
  </tr>
  <tr>
    <td>Sanguijuela de maná</td>
    <td colspan="4">Te deleitas con la energía de otros, lo degustas como si fuera un buen vino. Siempre que sea posible, robarás la energía a la persona más cercana (amigo o enemigo, la verdad es que te da igual) para lanzar tus hechizos.</td>
  </tr>
  <tr>
    <td>Asalvajado</td>
    <td>Penaliza todas las tiradas del personaje en zonas urbanas.</td>
    <td colspan="3">-3</td>
  </tr>
  <tr>
    <td>Desastroso</td>
    <td>La dificultad de los éxitos aumenta en 2 en la categoría Novato.</td>
    <td colspan="3">En categoría Normal en adelante, recibes menos experiencia (a juicio del máster) que los demás.</td>
  </tr>
</table>
<p>En caso de duda, consulta al máster. Si tienes una idea de rasgo para tu personaje, consúltalo con el máster.</p>
`;
