export default `<h2>Armadura</h2>
<p>Las armaduras son los objetos más importantes a la hora de mitigar el daño recibido.</p>
<p>La armadura no se considera un conjunto que proteja más o menos cuanto más piezas tengas o no, sino que funcionan de forma independiente unas de otras. En otras palabras, si alguien te golpea en el pecho, te protegerá la armadura que tengas en el pecho exclusivamente y sólo te beneficias de esa pieza para reducir el daño.</p>
<p>Las piezas de armadura tienen una vida útil que es su <b>Durabilidad (Dur)</b>. Esta vida útil se reduce con cada golpe recibido hasta que llega a 0, en cuyo caso se considera ROTA.</p>
<p>Una armadura ROTA no proporciona ninguna reducción de daño ni puedes beneficiarte de sus cualidades (si las tuviera)</p>
<p>Las armaduras constan de una <b>Reducción física (RFi)</b> y <b>Reducción Mágica (RMa)</b>. Algunas armaduras pesadas también tienen penalizadores al <b>Movimiento (Mov)</b>, o sobre algún talento.</p>
<ul>
  <li><b>Reducción física:</b> Reduce el daño físico total que fueras a recibir. Una armadura puede reducir todo el daño hasta 0.</li>
  <li><b>Reducción mágica:</b> Reduce el daño mágico total que fueras a recibir. Una armadura puede reducir todo el daño hasta 0.</li>
  <li><b>Movimiento:</b> Es la distancia a la que puede moverse el personaje de normal sin realizar una tirada de dados. El máximo son 20 metros.</li>
</ul>
<p>Algunas armaduras pueden requerir de un talento para poder llevarla por sus características como, por ejemplo, una armadura de placas requiere de una cantidad de Brutalidad para poder llevarla.</p>

<hr>

<h3>Tabla de valores básicos por tipo de armadura.</h3>
<table>
  <tr>
    <td><b>Tela</b></td>
    <td><b>Cuero</b></td>
    <td><b>Malla</b></td>
    <td><b>Placas</b></td>
  </tr>
  <tr>
    <td><b>RFi:</b> 0<br><b>RMa:</b> +4<br><b>Dur:</b> 1 golpe</td>
    <td><b>RFi:</b> +2<br><b>RMa:</b> +1<br><b>Dur:</b> 3 golpe</td>
    <td><b>RFi:</b> +4<br><b>RMa:</b> +0<br><b>Dur:</b> 5 golpe</td>
    <td><b>RFi:</b> +6<br><b>RMa:</b> +0<br><b>Dur:</b> 8 golpe</td>
  </tr>
</table>

<hr>

<h3>Tabla de requisitos y penalizados por pieza y tipo de armadura</h3>
<table>
  <tr>
    <td></td>
    <td><b>Cabeza</b></td>
    <td><b>Hombros</b></td>
    <td><b>Pecho</b></td>
    <td><b>Guantes</b></td>
    <td><b>Piernas</b></td>
    <td><b>Botas</b></td>
  </tr>
  <tr>
    <td><b>Tela</b></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><b>Cuero</b></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><b>Malla</b></td>
    <td></td>
    <td><b>Penalización:</b><br>-1 Ac</td>
    <td><b>Requisito:</b><br>1 Br<br><b>Penalización:</b><br>-1 Mov<br>-1 Ac<br>-1 DA</td>
    <td><b>Penalización:</b><br>-1 JdM</td>
    <td><b>Requisito:</b><br>1 Br<br><b>Penalización:</b><br>-1 Mov<br>-1 Ac<br>-1 DA</td>
    <td><b>Penalización:</b><br>-1 Ac</td>
  </tr>
  <tr>
    <td><b>Placas</b></td>
    <td><b>Requisito:</b><br>1 Br<br><b>Penalización:</b><br>-1 Per<br>-1 Ac<br>-1 DA</td>
    <td><b>Requisito:</b><br>2 Br<br><b>Penalización:</b><br>-2 Mov<br>-1 Ac<br>-1 DA</td>
    <td><b>Requisito:</b><br>4 Br<br><b>Penalización:</b><br>-3 Mov<br>-2 Ac<br>-4 DA</td>
    <td><b>Requisito:</b><br>1 Br<br><b>Penalización:</b><br>-2 JdM<br>-1 Ac</td>
    <td><b>Requisito:</b><br>4 Br<br><b>Penalización:</b><br>-3 Mov<br>-2 Ac<br>-4 DA</td>
    <td><b>Requisito:</b><br>2 Br<br><b>Penalización:</b><br>-2 Mov<br>-3 Ac<br>-2 DA</td>
  </tr>
</table>
<p>Si llevas una armadura para la que no tienes puntos suficientes requeridos, la penalización GLOBAL se duplica. Es decir, la penalización que tienes por cada pieza se duplica.</p>
<p>Los requisitos se suman por cada tipo que quieras llevar, es decir, si quieres llevar un peto de placas, necesitarás 4 Brutalidad (Br), pero si quieres llevar el peto y unos guantes de placas, será 4 Br del peto MÁS el 1 Br de los guantes, por lo que, necesitarás, en total, 5 Brutalidad (Br).</p>
<p>Lo mismo ocurre con todo lo demás.</p>

<hr>

<h3>Recubrimientos</h3>
<p>Los recubrimientos son mejoras que se pueden añadir a cada pieza de armadura. A cada pieza se puede añadir un único recubrimiento como máximo. Existen 3 tipos de recubrimientos.</p>
<table>
  <tr>
    <td><b>Cuero</b></td>
    <td><b>Malla</b></td>
    <td><b>Placa</b></td>
  </tr>
  <tr>
    <td><b>RFi:</b> +1<br><b>Dur:</b> +1 golpe</td>
    <td><b>RFi:</b> +2<br><b>Dur:</b> +2 golpe<br><b>DA:</b> -1</td>
    <td><b>RiF:</b> +3<br><b>Dur:</b> +3 golpe<br><b>DA:</b> -2<br><b>Mov:</b> -1<br><b>Requiere:</b> 1 Br</td>
  </tr>
</table>

<hr>

<h3>Combinando piezas</h3>
<p>Otra forma de llevar armadura es combinando tipos de armadura para una misma pieza (cabeza, pecho, piernas, etc), ganando así la bonificación de ambos tipos.</p>
<p>Sin embargo, hay una limitación de que, si llevas dos tipos de armadura para una misma pieza, estas armaduras no podrán tener recubrimiento. Y el límite de piezas combinables es de 2.</p>
<p>Se aplicarán ciertas desventajas por combinar piezas.</p>
<p>Las Placas y las Mallas no se pueden combinar entre sí. No puedes combinar dos piezas del mismo tipo.</p>
<table>
  <tr>
    <td><b>Tipo</b></td>
    <td><b>Tela</b></td>
    <td><b>Cuero</b></td>
    <td><b>Malla</b></td>
    <td><b>Placa</b></td>
  </tr>
  <tr>
    <td><b>Tela</b></td>
    <td>No permitido</td>
    <td>Sin penalización</td>
    <td>Sin penalización</td>
    <td>Sin penalización</td>
  </tr>
  <tr>
    <td><b>Cuero</b></td>
    <td>Sin penalización</td>
    <td>No permitido</td>
    <td>Duplica efectos negativos</td>
    <td>Duplica efectos negativos</td>
  </tr>
  <tr>
    <td><b>Malla</b></td>
    <td>Sin penalización</td>
    <td>Duplica efectos negativos</td>
    <td>No permitido</td>
    <td>Duplica efectos negativos y requerimientos</td>
  </tr>
  <tr>
    <td><b>Placa</b></td>
    <td>Sin penalización</td>
    <td>Duplica efectos negativos</td>
    <td>Duplica efectos negativos y requerimientos</td>
    <td>No permitido</td>
  </tr>
</table>`;
