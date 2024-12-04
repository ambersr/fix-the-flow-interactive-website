const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')

const containerWidth = 1200; // Breedte van de container in pixels

// Stel de verhoudingen in voor 50% van de container
const itemWidthRatio = 0.45; // 45% van de container
const paddingRatio = 0.005;  // 5% van de container

// Bereken absolute waarden
const itemWidth = containerWidth * itemWidthRatio;
const padding = containerWidth * paddingRatio;

// Bereken percentages
const itemWidthPercentage = itemWidthRatio * 100;
const paddingPercentage = paddingRatio * 100;

console.log(`Item Width: ${itemWidthPercentage.toFixed(2)}%`);
console.log(`Padding: ${paddingPercentage.toFixed(2)}%`);


prev.addEventListener('click',()=>{
  list.scrollLeft -= itemWidth + padding
})

next.addEventListener('click',()=>{
  list.scrollLeft += itemWidth + padding
})
