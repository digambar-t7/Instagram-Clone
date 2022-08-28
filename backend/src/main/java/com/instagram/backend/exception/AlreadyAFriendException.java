package com.instagram.backend.exception;

public class AlreadyAFriendException extends Exception {

    public AlreadyAFriendException() {
    }

    public AlreadyAFriendException(String message) {
        super(message);
    }

    public AlreadyAFriendException(Throwable cause) {
        super(cause);
    }

    public AlreadyAFriendException(String message, Throwable cause) {
        super(message, cause);
    }

    public AlreadyAFriendException(String message, Throwable cause, boolean enableSuppression,
            boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}
