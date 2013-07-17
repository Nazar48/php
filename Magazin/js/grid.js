var data;
var grid_generated = 0;
var cart_updated = 0;
var _grid;

function parseResponse(json) {
	data = json;
}

/*

<li class="product">
  <div class="image">
    <img src="../img/112.jpg" alt="elite">
  </div>
  <div class="product_info">
    <h3 class="info">
      <p>producer</p>
      <p>name</p>
    </h3>
    <span class="price">540,00грн.</span>
    <button class="button" value="в корзину">
  </div>
</li>

*/

function update_cart(total) {
	if (!cart_updated) {
		document.getElementById('cart_text').innerHTML = 'В корзине:';
		cart_updated = 1;
	}
	document.getElementById('cart_total').innerHTML = total + 'грн.';
	
}

function add_to_cart(id) {
	var request = XMLHttpRequest();
	request.onload = function() { update_cart(this.responseText); }
	request.open( 'POST', 'index.php?add_to_cart=' + id );
	request.send();
}

function generate_cell(struct) {
	var cell, div, el, el_;

	el = document.createElement('img');
	el.setAttribute('src', 'img/332.jpg');
	el.setAttribute('alt', 'elite');

	el_ = document.createElement('div');
	el_.className = 'image';
	el_.appendChild(el); // img

	cell = document.createElement('li');
	cell.className = 'product';
	cell.appendChild(el_); // div

	el = document.createElement('h3');
	el.className = 'info';
	el_ = document.createElement('p');
	el_.innerHTML = 'Название: ' + struct.name;
	el.appendChild(el_);
	el_ = document.createElement('p');
	el_.innerHTML = 'Производитель: ' + struct.producer;
	el.appendChild(el_);

	div = document.createElement('div');
	div.className = 'product_info';
	div.appendChild(el); // h3

	el = document.createElement('span');
	el.className = 'price';
	el.innerHTML = struct.price + 'грн.';
	div.appendChild(el); // outer span

	el = document.createElement('button');
	el.className = 'button';
	el.innerHTML = 'В&nbsp;корзину';
	el.onclick = function() { add_to_cart(struct.id); return false; };
	div.appendChild(el); // button

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
