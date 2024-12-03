export const createListsContent = (widgetLists, template, widgetData) => {
	const widgetTitle = template.content.querySelector('.widget-item__title');
	const widgetImg = template.content.querySelector('.widget-item__icon');
	const widgetScale = template.content.querySelector('.widget-item__scale');
	const widgetInput = template.content.querySelector('.progress-bar__input');
	const widgetPercent = template.content.querySelector(
		'.progress-bar__percent'
	);
	const widgetItemBar = template.content.querySelector('.progress-bar__title');

	widgetData.forEach(({ title, src, value, bar }) => {
		const { isRadial, barTitle, isProgressBar } = bar;
		widgetTitle.textContent = title;
		widgetImg.src = src;
		widgetScale.textContent = value;
		widgetItemBar.textContent = barTitle;

		if (isRadial) {
			widgetInput.classList.add('input-gradient');
		} else {
			widgetInput.classList.remove('input-gradient');
		}

		if (barTitle) {
			widgetPercent.style.display = 'none';
			widgetItemBar.style.display = 'block';
		} else {
			widgetPercent.style.display = 'flex';
			widgetItemBar.style.display = 'none';
		}

		if (isProgressBar) {
			widgetInput.style.display = 'block';
			widgetInput.setAttribute('value', `${parseInt(value.slice(0, 2))}`);
		} else {
			widgetInput.style.display = 'none';
			widgetItemBar.classList.add('bar-title-pb');
		}

		let li = template.content.cloneNode(true);
		widgetLists.append(li);
	});
};
