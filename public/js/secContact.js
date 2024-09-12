document.addEventListener('DOMContentLoaded', () =>{
    const selectElements = document.getElementById('state');
    
    let states = {
        1: 'Abia', 2: 'Adamawa', 3: 'Akwa Ibom', 4: 'Anambra', 5: 'Bauchi', 6: 'Bayelsa', 
        7: 'Benue', 8: 'Borno', 9: 'Cross River', 10: 'Delta', 11: 'Ebonyi', 12: 'Edo', 
        13: 'Ekiti', 14: 'Enugu', 15: 'Gombe', 16: 'Imo', 17: 'Jigawa', 18: 'Kaduna', 
        19: 'Kano', 20: 'Katsina', 21: 'Kebbi', 22: 'Kogi', 23: 'Kwara', 24: 'Lagos', 
        25: 'Nasarawa', 26: 'Niger', 27: 'Ogun', 28: 'Ondo', 29: 'Osun', 30: 'Oyo', 
        31: 'Plateau', 32: 'Rivers', 33: 'Sokoto', 34: 'Taraba', 35: 'Yobe', 36: 'Zamfara', 
        37: 'Federal Capital Territory (FCT)', 38: 'N/A'
    };

    Object.entries(states).forEach(([key, value]) => {
        createSelect(selectElements, key, value);
    });

    function createSelect(element, key, value) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = value;
        element.appendChild(option)
    }

});