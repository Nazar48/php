var data;

function parseResponse(json) {
	data = json;
}

/*

<li class="product">
  <div class="image">
    <a href="#">
      <img src="../img/112.jpg" alt="elite">
    </a>
  </div>
  <div class="product_info">
    <h3 class="info">
      <a href="#">Dymatize Elite Casein 1818 грамм</a>
    </h3>
    <form class="variants" action="/cart">
      <span class="price">540,00
	    <span class="currency">грн.</span>
      </span>
      <input class="button" type="submit" value="в корзину">
    </form>
  </div>
</li>

*/

function generate_cell(struct) {
	var el, el_, div, cell;

	el = document.createElement('img');
	el.setAttribute('src', 'img/112.jpg');
	el.setAttribute('alt', 'elite');

	el_ = document.createElement('a');
	el_.appendChild(el); // img

	el = document.createElement('div');
	el.className = 'image';
	el.appendChild(el_); // a

	cell = document.createElement('li');
	cell.className = 'product';
	cell.appendChild(el); // div

	el = document.createElement('a');
	el.innerHTML = struct.producer + ' | ' + struct.name;

	el_ = document.createElement('h3');
	el_.className = 'info';
	el_.appendChild(el); // a

	div = document.createElement('div');
	div.className = 'product_info';
	div.appendChild(el_); // h3

	el = document.createElement('span');
	el.className = 'currency';
	el.innerHTML = 'грн.';

	el_ = document.createElement('span');
	el_.className = 'price';
	el_.innerHTML = struct.price;
	el_.appendChild(el); // inner span

	el = document.createElement('form');
	el.className = 'variants';
	el.setAttribute('action', '/cart');
	el.appendChild(el_); // span

	el_ = document.createElement('input');
	el_.className = 'button';
	el_.setAttribute('type', 'submit');
	el_.setAttribute('value', 'В корзину');
	el.appendChild(el_); // form.appendChild(input)

	div.appendChild(el); // form
	cell.appendChild(div);

	return cell;
}

function generate_grid(el) {
	data.forEach(function(e) {
		el.appendChild(generate_cell(e));
	});
}

function generate_producers(el) {
	data.forEach(function(e) {
		var el_;

		el_ = document.createElement('a');
		el_.innerHTML = e.producer;

		el.appendChild(el_);
	});
}
