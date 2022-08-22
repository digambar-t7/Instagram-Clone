package com.instagram.backend.exception;

import org.springframework.web.bind.annotation.ResponseBody;

@ResponseBody
public class FriendNotFoundException extends Exception {

    public FriendNotFoundException() {
    }

    public FriendNotFoundException(String message) {
        super(message);
    }

    public FriendNotFoundException(Throwable cause) {
        super(cause);
    }

    public FriendNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public FriendNotFoundException(String message, Throwable cause, boolean enableSuppression,
            boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}
