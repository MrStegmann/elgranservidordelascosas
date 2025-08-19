export default `<h2>Armas</h2>
<p>Las armas determinan la cantidad de daño que harás al objetivo cuando aciertas un golpe.</p>
<p>También se considera como arma tus propios puños, los cuales escalan en daño con el talento <b>Brutalidad (Br)</b> y <b>Acrobacias (Ac)</b>.</p>
<p>El total del daño que haces se calcula teniendo en cuenta el daño de tu armas más el talento que beneficia. Todo el daño calculado se redondea a la baja.</p>
<ul>
  <li><b>Desarmado</b>
    <ul>
      <li><b>Talento</b>: Brutalidad / 2 + Acrobacias / 2</li>
      <li>Daño = Brutalidad / 2 + Acrobacias / 2</li>
      <li>Bonificadores al resultado posibles:
        <ul>
          <li><b>Chi</b>: Para personajes con un arquetipo tipo Monje.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><b>Armas de puño</b>
    <ul>
      <li><b>Talento</b>: Brutalidad / 2 + Acrobacias / 2</li>
      <li>Daño = (Brutalidad / 2 + Acrobacias / 2) + 1</li>
      <li>Bonificadores al resultado posibles:
        <ul>
          <li><b>Chi</b>: Para personajes con un arquetipo tipo Monje.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><b>Armas finas</b>
    <ul>
      <li><b>Talento</b>: Armas finas</li>
      <li>Daño: 3</li>
    </ul>
  </li>
  <li><b>Armas a distancia ligeras</b>
    <ul>
      <li>Las armas a distancia tienen un plus a su daño según la calidad de la munición usada.</li>
      <li>Dependiendo del tipo de arma, puede variar el daño.</li>
      <li><b>Talento</b>: ADL</li>
      <li>Daño: 2-3</li>
    </ul>
  </li>
  <li><b>Armas de 1 manos</b>
    <ul>
      <li><b>Talento</b>: AtC1</li>
      <li>Daño: 4</li>
    </ul>
  </li>
  <li><b>Armas de 2 manos</b>
    <ul>
      <li><b>Talento</b>: AtC2</li>
      <li>Daño: 5</li>
    </ul>
  </li>
  <li><b>Armas a distancia pesada</b>
    <ul>
      <li>Las armas a distancia tienen un plus a su daño según la calidad de la munición usada.</li>
      <li>Dependiendo del tipo de arma, puede variar el daño.</li>
      <li><b>Talento</b>: ADP</li>
      <li>Daño: 3-5</li>
    </ul>
  </li>
</ul>`;
