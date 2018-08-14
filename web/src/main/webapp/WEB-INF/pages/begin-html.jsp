<%@ page language="java"  pageEncoding="UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="f" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Developing</title>
    <link href="${pageContext.request.contextPath}/resources/css/bootstrap.min.css" rel="stylesheet">
    <link  href="${pageContext.request.contextPath}/resources/libs/css/font-awesome.min.css" rel="stylesheet">
    <script src="${pageContext.request.contextPath}/resources/js/jquery.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"></script>
    <link href="${pageContext.request.contextPath}/resources/css/main.css" rel="stylesheet">
</head>
<body >
<nav class="navbar navbar-default menu">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="${pageContext.request.contextPath}/"><img
                            src="${pageContext.request.contextPath}/resources/images/logo.gif" alt="img"
                            class="img-circle"></a>
                </div>
            </div>
            <security:authorize access="isAnonymous()">
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-15">
                <div class="col-md-5" align="right" style="margin-right: -50px">
                    <form action="${pageContext.request.contextPath}/login" class="form-inline navbar-form"
                          method="POST">
                        <c:if test="${param['error']}">
                            <div class="form-group">
                                <p class="bg-danger" style="margin-left: -200px;">Username or password is not valid!</p>
                            </div>
                        </c:if>
                        <div class="form-group">
                            <label for="username" class="sr-only">Login</label>
                            <input type="username" name="username" size="16" class="form-control" id="username"
                                   placeholder="Login" required="">
                        </div>
                        <div class="form-group">
                            <label for="password" class="sr-only">Password</label>
                            <input type="password" name="password" size="16" class="form-control" id="password"
                                   placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-default">Войти</button>
                    </form>
                </div>
                <div class="col-md-1">
                    <div class="form-inline navbar-form">
                        <button class="btn btn-default"><a href="${pageContext.request.contextPath}/#register"
                                                           class="registerLink"
                                                           style="text-decoration: none; margin-right: 0">
                            Регистрация</a></button>
                    </div>
                </div>
                </security:authorize>
                <security:authorize access="isAuthenticated()">
                    <div>
                        <div style="display: inline-block; ">
                            <p style=" font-size: 25px; font-weight: 600; color: whitesmoke; margin-right: 4em; margin-left: 8em">
                                Welcome!:
                                <security:authentication property="principal.username"/></p>
                        </div>
                        <div style=" display: inline-block; ">
                            <button class="btn btn-default"><a href="<c:url value="/logout" />" class="registerLink" style="text-decoration: none;">
                                Выход</a></button>
                        </div>
                    </div>
                </security:authorize>
                <div class="modal_container" id="register">
                    <div class="Mymodal">
                        <a href="${pageContext.request.contextPath}/close" class="close">X</a>
                        <span class="modal_head">
                  REGISTRATION
                </span>
                        <f:form method="POST" modelAttribute="user"
                                action="${pageContext.request.contextPath}/register">
                            <f:input modal="m" path="username" type="text" placeholder="Имя"/><br>
                            <f:input modal="m" path="email" type="text" placeholder="Адрес почты"/><br>
                            <f:input modal="m" path="password" type="text" placeholder="Пароль"/><br>
                            <input modal="m" type="submit" name="save" class="BtnRegister"
                                   style="font-size: 25pt; font-family: CitricaCyrillic" value="Зарегестрировать">
                        </f:form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
<div class="container">
    <div class="col-md-12">
        <div class="navbar-header">
        </div>
        <div class="row" style="font-size: 0">
            <a class="logo" style="text-decoration: none">AutoSale</a>
            <nav class="maian clearfix">
                <ul>
                    <li class="active"><a href="${pageContext.request.contextPath}/">Главная</a></li>
                    <li><a href="${pageContext.request.contextPath}/allNews">Новости</a></li>
                    <li><a href="${pageContext.request.contextPath}/getAllAds">Объявления</a></li>
                    <security:authorize access="isAuthenticated()">
                        <security:authorize access="hasRole('ROLE_USER')">
                            <li><a href="${pageContext.request.contextPath}/profile">Профиль</a></li>
                        </security:authorize>
                        <security:authorize access="hasRole('ROLE_ADMIN')">
                            <li><a href="${pageContext.request.contextPath}/admin">Администратор</a></li>
                        </security:authorize>
                        <security:authorize access="hasRole('ROLE_SUPER_ADMIN')">
                            <li><a href="${pageContext.request.contextPath}/superadmin">СуперАдминистратор</a></li>
                        </security:authorize>
                    </security:authorize>
                </ul>
                <div class="top_contacts"><i class="fa fa-mobile fa-x" aria-hidden="true"></i> 300-800-900</div>
            </nav>
        </div>
    </div>
</div>
</body>