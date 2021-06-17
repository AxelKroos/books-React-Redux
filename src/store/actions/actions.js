export function currentInput(value) {
    return {
        type: 'CURRENT_INPUT',
        payload: value.split(" ").join("+").toLowerCase()
    }
}

export function startTheDownloads() {
    return {
        type: 'START_THE_DOWNLOAD'
    }
}

export function showSnippets(value) {
    return {
        type: 'SHOW_SNIPPETS',
        payload: value
    }
}

export function openModal(index) {
    return {
        type: 'OPEN_MODAL',
        payload: index
    }
}

export function closeModal() {
    return {
        type: 'CLOSE_MODAL'
    }
}