<%@ include file="begin-html.jsp" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<div class="main">
    <f:form action="${pageContext.request.contextPath}/updateAd" modelAttribute="userAd" method="POST"
            enctype="multipart/form-data">
        <f:input value="${userAd.id}" path="id" type="text" cssStyle="visibility: hidden"/>
        <f:input value="${userAd.markAuto}" path="markAuto" type="text" cssStyle="visibility: hidden"/>
        <f:input value="${userAd.modelAuto}" path="modelAuto" type="text" cssStyle="visibility: hidden"/>
        <div class="row">
            <div class="col-md-9">
                <a href="${pageContext.request.contextPath}/showAd"
                   style="text-decoration: none; color: black; font-size: 40px">
                    <strong>${userAd.modelAuto} ${userAd.markAuto},&nbsp ${userAd.yearOfIssue} г.в.</strong></a>
            </div>
            <div class="col-md-3">
                <p>Создано:&nbsp <c:out value="${userAd.date}"/></p>
            </div>
        </div>
        <hr/>
        <div class="row">
            <div class="col-md-4">
                <div horizontal="hor" class="price" style="width: 450px;">
                    <ul align="a" style="text-align: left">
                        <ul v="a">
                            <li><a c="c"><strong style="color: red; font-size: 35px">${userAd.price}$
                                <f:input id="title" value="${userAd.price}" path="price" type="text" size="3"
                                         cssStyle="margin-left: 7%"/>
                            </strong></a></li>
                        </ul>
                        <ul v="a">
                            <li><a c="c">год выпуска <strong>
                                <f:input id="title" value="${userAd.yearOfIssue}" path="yearOfIssue" type="text"
                                         size="5"
                                         cssStyle="margin-left: 7%"/>
                            </strong></a></li>
                        </ul>
                        <ul a="a">
                            <li><a c="c">пробег <strong>
                                <f:input id="title" value="${userAd.mileAge}" path="mileAge" type="text" size="5"
                                         cssStyle="margin-left: 19%"/>
                            </strong></a></li>
                        </ul>
                        <ul a="a">
                            <li><a c="c">объем <strong style="margin-left: 21%">
                                <f:input id="title" value="${userAd.engine}" path="engine" type="text" size="10"/>
                            </strong></a></li>
                        </ul>
                        <ul a="a">
                            <li><a c="c">цвет <strong style="margin-left: 25%">
                                <f:input id="title" value="${userAd.color}" path="color" type="text" size="5"/>
                            </strong></a></li>
                        </ul>
                        <ul a="a">
                            <li><a c="c">кузов
                                <strong><f:input id="title" value="${userAd.bodyStyle}" path="bodyStyle" type="text"
                                                 size="7" cssStyle="margin-left: 23%"/>
                                </strong></a></li>
                        </ul>
                        <ul a="a">
                            <li><a c="c">трансмиссия<strong>
                                <f:input id="title" value="${userAd.transmission}" path="transmission" type="text"
                                         size="5" cssStyle="margin-left: 4%"/>
                            </strong></a></li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div class="col-md-6">
                <img
                        src="${pageContext.request.contextPath}/downloadEntity/<c:out value="${userAd.adEntities[0].id}?type=ad"/>"
                        width="650" height="500" style="vertical-align: bottom; border-radius: 10px"></a>
            </div>
        </div>
        <div class="div-form">
            <label in="upload" for="file"><i class="fa fa-upload fa-2x" aria-hidden="true"
                                             style="margin-right: 9px"></i>
                <span id="label_span">Выберите фото для загрузки</span></label>
            <div id="imgprev">
            </div>
            <input type="file" id="file" name="file" multiple="true" path="file" style="display: inline-block"/>
        </div>
        <hr/>
        <div class="text" style="position: relative">
            <p> <textarea id="text" name="text" rows="6" cols="143"
            >${userAd.carDescription}</textarea>
            <p>
        </div>
        <hr/>
        <security:authorize access="isAuthenticated()">
            <security:authentication property="principal.username" var="username"/>
            <c:set var="adsUser" value="${userAd.user.username}"/>
            <c:if test="${username == adsUser}">
                <div style="padding-left: 45%; padding-right: 45%; width:10%;">
                    <button class="btn btn-default" type="submit" style="height: 40px;  border: 0px; font-size: unset;  background: green;
                                           color: #fff; font-weight: 700"/>
                    Oбновить</button>
                </div>
            </c:if>
            <hr/>
            <strong><p style="text-align: center">Комментарии</p></strong>
        </security:authorize>
    </f:form>
    <security:authorize access="isAuthenticated()">
        <c:if test="${username != adsUser}">
            <f:form action="${pageContext.request.contextPath}/updateComment" modelAttribute="commentAd"  method="POST">
                <input value="${username}" name="username" type="hidden"/>
                <input value="${userAd.id}" name="adId" type="hidden"/>

                <div style="margin-left: 30%">
                    <f:textarea id="comment" path="text" rows="3" cols="50"></f:textarea>
                </div>
                <div style="margin-left: 44%">
                    <button class="btn btn-default" type="submit"/>
                    Отправить</button>
                </div>
            </f:form>
        </c:if>
    </security:authorize>
    <div class="row">
        <c:forEach var="comment" items="${userAd.comments}">
            <div class="adv" style="height: 100px">
                <div style="color: red; padding: 0"><strong> ${comment.userDTO.username}:</strong></div>
                <div style="padding: 0"> ${comment.text}</div>
            </div>
        </c:forEach>
    </div>
</div>
<script src="resources/script/uploadbutton.js"></script>
<script src="resources/script/imgprev.js"></script>
