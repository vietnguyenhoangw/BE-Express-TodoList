module.exports = {
    returnRequest: function(status, modal, message, error) {
        return {
            status: status,
            modal: modal,
            message: message,
            error: error
        }
    }
};