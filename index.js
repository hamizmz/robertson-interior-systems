((dom) => {
	let _overlay = dom.getElementById("overlay");
	let _contactform = dom.getElementById("contact_form");
	let _slideshow = dom.getElementsByClassName("Slideshow")[0];

	let get_contact_buttons = dom => Array.from(dom.getElementsByClassName("ContactButton"));
	let show_contact_form = e => {
		_overlay.style.display = "block";
		_contactform.style.display = "block";
	};
	let set_contact_behaviour = button => button.addEventListener('click', show_contact_form, false);


	let get_form_buttons = dom => Array.from(dom.getElementsByTagName("button"));
	let submit_contact_form = e => {
		alert("Message Sent!");
		hide_contact_form(e);
	};
	let hide_contact_form = e => {
		_overlay.style.display = "none";
		_contactform.style.display = "none";
	};
	let set_button_behaviour = button => {
		button.addEventListener('click', (button => {
			if (button.className === "Submit")
				return submit_contact_form;
			return hide_contact_form;
		})(button), false);
	};


	let get_images = dom => Array.from(dom.getElementsByTagName("img"));
	let show_image = img => {
		_overlay.style.display = "block";
		_overlay.style.zIndex = 6;
		_slideshow.style.zIndex = 10;

		img.style.zIndex = 5000;
		img.style.position = "fixed";
		img.style.top = "30pt";
		img.style.left = "20pt";
		img.style.width = "calc(100% - 40pt)";

		return true;
	};
	let hide_image = img => {
		_overlay.style.display = "none";
		_overlay.style.zIndex = 10;
		_slideshow.style.zIndex = 1;

		img.style.position = img.style.top = img.style.left = img.style.width = img.style.zIndex = null;

		return false;
	};
	let make_image_toggle = img => {
		let active = false;
		img.addEventListener('click', e => {
			active = active ? hide_image(img) : show_image(img);
		}, false);
		_overlay.addEventListener('click', e => hide_image(img), false);
	};


// 	let set_slide_behaviour = button => button.addEventListener

	get_contact_buttons(dom).forEach(set_contact_behaviour);
	get_form_buttons(_contactform).forEach(set_button_behaviour);
// 	get_form_buttons(_slideshow).forEach(set_slide_behaviour);
	get_images(dom).forEach(make_image_toggle);
})(document);
