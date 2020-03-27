const rooms = [
	{
		id: 0,
		name: "Modern",
		alt: "Modern Living Room",
		description: "A “store in style” kind of living room",
		src:
			"https://www.ikea.com/images/eket-cabinet-in-anthracite-in-a-living-room-with-cream-leath-235441c5fc0309c162129ca1eed37d87.jpg?f=xxxl",
		itemIds: [11, 12, 13, 14, 15]
	},
	{
		id: 1,
		name: "Traditional",
		alt: "Traditional Living Room",
		description: "Me and my multigenerational home",
		src:
			"https://www.ikea.com/images/4-seat-lidhult-corner-sofa-in-dark-brown-leather-in-a-living-25ec4a87ce4bb639f803b29d5a4986dc.jpg?f=xxxl",
		itemIds: [21, 22, 23, 24, 25]
	}
];

const items = [
	{
		id: 11,
		preview:
			"https://www.ikea.com/images/eket-wall-mounted-shelving-units-in-various-colours-above-a--b4b69704dbc5a69451040954a463161e.jpg?f=xl",
		images: [
			"https://www.ikea.com/ca/en/images/products/eket-wall-mounted-shelving-unit-red__0715172_PE730357_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/eket-wall-mounted-shelving-unit-red__0715171_PE730356_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/eket-wall-mounted-shelving-unit-red__0703489_PE724760_S5.JPG?f=xl"
		],
		brand: "EKET",
		name: "Wall-mounted shelving unit",
		description: 'red, 13 3/4x9 7/8x13 3/4 " (35x25x35 cm)',
		price: 25.0
	},
	{
		id: 12,
		preview:
			"https://www.ikea.com/images/eket-dark-grey-cabinet-combination-with-a-silver-stockholm-2-bbfbe8e82c93b05f4588b497457d5390.jpg?f=xl",
		images: [
			"https://www.ikea.com/ca/en/images/products/eket-cabinet-combination-with-legs-dark-grey__0709231_PE726890_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/eket-cabinet-combination-with-legs-dark-grey__0716578_PE730931_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/eket-cabinet-combination-with-legs-dark-grey__0744957_PE743502_S5.JPG?f=xl"
		],
		brand: "EKET",
		name: "Storage combination with legs",
		description: 'dark gray, 27 1/2x13 3/4x31 1/2 " (70x35x80 cm)',
		price: 135.0
	},

	{
		id: 13,
		preview:
			"https://www.ikea.com/images/gamlehult-rattan-footstool-with-hidden-storage-in-front-of-a-a274605c1c6f49ea9f6f4b0993eb1f95.jpg?f=m",
		images: [
			"https://www.ikea.com/ca/en/images/products/gamlehult-footstool-with-storage-rattan-anthracite__0842809_PE719505_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/gamlehult-footstool-with-storage-rattan-anthracite__0842801_PE716938_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/gamlehult-footstool-with-storage-rattan-anthracite__0672900_PE716937_S5.JPG?f=xl"
		],
		brand: "GAMLEHULT",
		name: "Footstool with storage",
		description: "rattan, anthracite",
		price: 79.99
	},
	{
		id: 14,
		preview:
			"https://www.ikea.com/images/hoppvals-white-cellular-blind-hung-on-a-window-with-an-outdo-15f26081ffbe10f9725f7d33e52680e9.jpg?f=m",
		images: [
			"https://www.ikea.com/ca/en/images/products/hoppvals-cellular-blind__0720260_PE732492_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/hoppvals-cellular-blind__0892426_PE574007_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/hoppvals-cellular-blind__0892438_PE574666_S5.JPG?f=xl"
		],
		brand: "HOPPVALS",
		name: "Cellular blind",
		description: 'white, 27x64 " (68.6x163 cm)',
		price: 29.99
	},
	{
		id: 15,
		preview:
			"https://www.ikea.com/images/poaeng-armchair-in-white-stained-oak-veneer-with-a-cream-lea-cd87cafa6bbbf9aa6a9be4a44ad9752a.jpg?f=m",
		images: [
			"https://www.ikea.com/ca/en/images/products/poaeng-armchair__0837647_PE601073_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/poaeng-armchair__0250853_PE389390_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/poaeng-armchair__0836872_PE585629_S5.JPG?f=xl"
		],
		brand: "POÄNG",
		name: "Armchair",
		description: "birch veneer, Robust Glose off-white",
		price: 199.0
	},
	{
		id: 21,
		preview:
			"https://www.ikea.com/images/dark-brown-leather-lidhult-sofa-decorated-with-sanela-cushio-afdfc438e21a2ba000b4bcba39240eb9.jpg?f=xl",
		images: [
			"https://www.ikea.com/ca/en/images/products/sanela-cushion-cover-dark-red__0888909_PE682834_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/sanela-cushion-cover-dark-red__0888897_PE682832_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/sanela-cushion-cover-dark-red__0888897_PE682832_S5.JPG?f=xl",

			"https://www.ikea.com/ca/en/images/products/sanela-cushion-cover-dark-red__0888912_PE682835_S5.JPG?f=xl"
		],
		brand: "SANELA",
		name: "Cushion cover",
		description: 'dark red, 16x26 " (40x65 cm)',
		price: 9.99
	},
	{
		id: 22,
		preview:
			"https://www.ikea.com/images/listerby-round-brown-wood-coffee-table-with-shelf-underneath-a51aeeb8ff4be5a82b900cf372a9039c.jpg?f=xl",
		images: [
			"https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0835984_PE693238_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0705840_PH155559_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0676412_PH155555_S5.JPG?f=xl"
		],
		brand: "LISTERBY",
		name: "Coffee table",
		description: 'brown, 35 3/8 " (90 cm)',
		price: 179.0
	},
	{
		id: 23,
		preview:
			"https://www.ikea.com/images/two-dark-grey-strandmon-armchairs-with-sanela-pastel-coloure-9203893cab2773177bc72bdffa25ed7a.jpg?f=xl",
		images: [
			"https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0835984_PE693238_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0705840_PH155559_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/listerby-coffee-table-brown__0676412_PH155555_S5.JPG?f=xl"
		],
		brand: "STRANDMON",
		name: "Armchair",
		description: "Nordvalla dark gray",
		price: 299.0
	},
	{
		id: 24,
		preview:
			"https://www.ikea.com/images/evedal-hanging-pendant-lamps-arranged-at-different-heights-a-6ab0d2486a8c530195ef8a806b66d1fb.jpg?f=xl",
		images: [
			"https://www.ikea.com/ca/en/images/products/evedal-pendant-lamp__0880982_PE680880_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/evedal-pendant-lamp__0702740_PH155545_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/evedal-pendant-lamp__0795471_PH163226_S5.JPG?f=xl"
		],
		brand: "EVEDAL",
		name: "Pendant lamp",
		description: "gray",
		price: 149.0
	},
	{
		id: 25,
		preview:
			"https://www.ikea.com/images/an-evedal-dome-shaped-table-lamp-next-to-three-glittrig-whit-bd6a1f7a02c03660ac4bc54be9fe251a.jpg?f=xxxl",
		images: [
			"https://www.ikea.com/ca/en/images/products/evedal-table-lamp__0879408_PE712302_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/evedal-table-lamp__0686393_PH155558_S5.JPG?f=xl",
			"https://www.ikea.com/ca/en/images/products/evedal-table-lamp__0879422_PE712304_S5.JPG?f=xl"
		],
		brand: "EVEDAL",
		name: "Table lamp",
		description: "gray",
		price: 199.0
	}
];

const getItems = roomId => {
	const { itemIds } = rooms[roomId];
	return items
		.filter(item => itemIds.includes(item.id))
		.map(item => ({ id: item.id, name: item.name, preview: item.preview }));
};

const getItem = itemId => {
	return items.filter(item => item.id === Number(itemId))[0];
};

const getNextItemId = (roomId, itemId) => {
	const { itemIds } = rooms[roomId];
	for (let i = 0; i < itemIds.length; i++) {
		if (itemIds[i] === Number(itemId) && i < itemIds.length - 1)
			return itemIds[i + 1];
	}
	return 0;
};

const getPrevItemId = (roomId, itemId) => {
	const { itemIds } = rooms[roomId];
	for (let i = 0; i < itemIds.length; i++) {
		if (itemIds[i] === Number(itemId) && i > 0) return itemIds[i - 1];
	}
	return 0;
};

export { getItems, getItem, getNextItemId, getPrevItemId };
