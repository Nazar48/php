var data;
var grid_generated = 0;
var _grid;

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
	el.setAttribute('src', 'img/332.jpg');
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
	el_ = document.createElement('p');
	el_.innerHTML = 'Название: ' + struct.name;
	el.appendChild(el_);
	el_ = document.createElement('p');
	el_.innerHTML = 'Производитель: ' + struct.producer;
	el.appendChild(el_);

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
	el_.setAttribute('type', 'button');
	el_.setAttribute('value', 'В корзину');
	el.appendChild(el_); // form.appendChild(input)

	div.appendChild(el); // form
	cell.appendChild(div);

	return cell;
}

function regenerate_grid(sort_by) {
	if (grid_generated) {
		while (_grid.firstChild) {
			_grid.removeChild(_grid.firstChild);
		}
	}

	var sorted_data = data;
	if (sort_by != undefined) {
		sorted_data.sort(function(a, b) {
			if (sort_by == 'sort_by_name') {
				if (a.name < b.name) return -1;
				if (a.name > b.name) return 1;
				return 0;
			}
			if (sort_by == 'sort_by_price') {
				return a.price - b.price;
			}
		});
	}
		
	for (var i in sorted_data) {
		_grid.appendChild(generate_cell(sorted_data[i]));
	}
	grid_generated = 1;
}

function generate_producers(el) {
	var a, i;
	var producers = [];

	// отбор уникальных продюсеров
	for (i in data) {
		if (producers.indexOf(data[i].producer) == -1) {
			producers.push(data[i].producer);
		}
	}

	producers.sort();

	for (i in producers) {
		a = document.createElement('a');
		a.innerHTML = producers[i];

		el.appendChild(a);
	}
}
