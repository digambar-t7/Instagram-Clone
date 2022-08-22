package com.instagram.backend.exception;

import org.springframework.web.bind.annotation.ResponseBody;

@ResponseBody
public class CurrentUserUnauthorizedException extends Exception {

    public CurrentUserUnauthorizedException() {
    }

    public CurrentUserUnauthorizedException(String message) {
        super(message);
    }

    public CurrentUserUnauthorizedException(Throwable cause) {
        super(cause);
    }

    public CurrentUserUnauthorizedException(String message, Throwable cause) {
        super(message, cause);
    }

    public CurrentUserUnauthorizedException(String message, Throwable cause, boolean enableSuppression,
            boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

}
