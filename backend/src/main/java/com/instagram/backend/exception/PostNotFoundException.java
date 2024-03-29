package com.instagram.backend.exception;

public class PostNotFoundException extends Exception {

    public PostNotFoundException() {
    }

    public PostNotFoundException(String message) {
        super(message);
    }

    public PostNotFoundException(Throwable cause) {
        super(cause);
    }

    public PostNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public PostNotFoundException(String message, Throwable cause, boolean enableSuppression,
            boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}
