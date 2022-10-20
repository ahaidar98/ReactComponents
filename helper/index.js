const onInputChange = async (e) => {
    const { name, value } = e.target;
    const inputNameError = `${name}Error`;
    let stateValue = { ...state };

    stateValue = { ...stateValue, [name]: value };

    if (name !== '') {
        stateValue = { ...stateValue, [inputNameError]: false }
    }

    setState(stateValue);
}

const onHandleMultiSelectOptionClick = (label, value) => {
    let tempArr = [...state.selectedlocations],
        orginalOptArr = [...state.allLocations],
        stateValues = { ...state };

    if (state.selectedlocations.some((opt) => opt.value === value)) {
        //remove pill
        tempArr = tempArr.filter((opt) => opt.value !== value);
        orginalOptArr.push({ label, value });
    } else {
        //add pill
        tempArr.push({ label, value });
        orginalOptArr = orginalOptArr.filter((opt) => parseInt(opt.value) !== parseInt(value));
    }

    if (state.selectedLocationsError) {
        stateValues = { ...stateValues, selectedlocationsError: false };
    }

    stateValues = { ...stateValues, selectedlocations: tempArr, allLocations: orginalOptArr };
    setState(stateValues);
}

const onHandleMultiSelectSupervisorOptionClick = (label, value) => {
    let tempArr = [...state.supervisorIds],
        orginalOptArr = [...state.allSupervisors],
        stateValues = { ...state };
    console.log('init', orginalOptArr, tempArr)

    if (state.supervisorIds.some((opt) => opt.value === value)) {
        //remove pill
        tempArr = tempArr.filter((opt) => opt.value !== value);
        orginalOptArr.push({ label, value });
    } else {
        //add pill
        tempArr.push({ label, value });
        orginalOptArr = orginalOptArr.filter((opt) => opt.value !== value);
    }

    if (state.supervisorIdsError) {
        stateValues = { ...stateValues, supervisorIdsError: false };
    }

    stateValues = { ...stateValues, supervisorIds: tempArr, allSupervisors: orginalOptArr };
    setState(stateValues);
}

const onHandleSearchDropdownSearchChange = (value, name, searchById) => {
    const filteredData = state[`${name}Dupe`].filter((opt) => {
        if (searchById) {
            return opt.label.toString().toLowerCase().includes(value.toString().toLowerCase()) || opt.value.toString().toLowerCase().includes(value.toString().toLowerCase());
        }

        return opt.label.toString().toLowerCase().includes(value.toString().toLowerCase());
    });

    if (value === '') {
        setState({ ...state, [name]: state[`${name}Dupe`] })
    } else {
        setState({ ...state, [name]: filteredData })
    }
}