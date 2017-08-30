class Router {
    handle(state, input) {
        return state.invoke(input);
    }

    shouldExit() {
    }
}

module.exports = Router;