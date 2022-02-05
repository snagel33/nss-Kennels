const remoteURL = "http://localhost:8088"

export const getEmployeeById = (employeeId) => {
    return fetch(`${remoteURL}/employees/${employeeId}?_expand=location`)
        .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees`)
        .then(res => res.json())
}
