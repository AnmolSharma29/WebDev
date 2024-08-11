let obj = {
	"prop_1": {
		"prop_11": "val_11",
		"prop_12": "val_12"
	},
	"prop_2": "val_2",
	"prop_3": "val_3"
};

console.log(JSON.stringify(obj));

console.log(JSON.stringify(obj, undefined, 4));
