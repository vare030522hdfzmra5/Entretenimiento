import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
function App() {

	function menu(evt) {
		window.location = "--------";
  }

return (

    <div>
      <h1>Entretenimiento</h1>
      <p></p>
     <ul>

<ul class="nav">
				
				<li><a href="">PARA PASAR EL RATO:</a>
					<ul>
						<li><a href="https://www.buzzfeed.com/mx/christopherhudspeth/quiz-de-memoria-efecto-mandela">Efecto Mandela<img src="https://i.ytimg.com/vi/cZJE5F6BCNo/hqdefault.jpg" align="center" width="120" height="60" alt="" /></a></li>
						<li><a href="https://www.youtube.com/watch?v=yrSDD-O2PVA">Test de personalidad<img src="https://lamenteesmaravillosa.com/wp-content/uploads/2018/02/rostros-encajados-por-engranajes.jpg" align="center" width="100" height="60" alt="" /></a></li>
            <li><a href="https://www.genbeta.com/a-fondo/25-sitios-web-completamente-inutiles-pero-adictivos">Paginas divertidas<img src="https://gerente.com/co/wp-content/uploads/sites/16/2018/07/emoji-risa_0.jpg" align="center" width="100" height="60" alt="" /></a></li>
						<li><a href="https://www.google.com/search?q=noticias+de+ultima+hora&hl=es&source=lnms&tbm=nws&sa=X&ved=2ahUKEwi__e_6lYPyAhUKLa0KHaaBCBsQ_AUoAXoECAIQAw&biw=1366&bih=657">Noticias de ultima hora<img src="https://w7.pngwing.com/pngs/831/454/png-transparent-illustration-breaking-news-graphic-design-cartoon-news-anchor-on-tv-breaking-news-food-text-logo-thumbnail.png" align="center" width="100" height="60" alt="" /></a></li>
           
					</ul>
				</li>

       

			</ul>
      </ul>
			<button onClick={menu}> MENU PRINCIPAL </button>
      </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
