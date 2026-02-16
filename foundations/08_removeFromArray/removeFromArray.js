const removeFromArray = function(array, ...itemsToRemove) {
    
    // Loop through each item of the sourceArray and decide whether it shoiuld stay 
    return array.filter(item => {

        // Check if this item exists in the removal list
        const shouldRemove = itemsToRemove.includes(item);

        // Keep this item only if it is NOT in the removal list
        return !shouldRemove;

    })
};

// Do not edit below this line
module.exports = removeFromArray;
