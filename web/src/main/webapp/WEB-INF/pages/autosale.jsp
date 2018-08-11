<%@ include file="begin-html.jsp" %>
<%@ page language="java" contentType="text/html; UTF-8" pageEncoding="UTF-8" %>

<div class="container-fluid">
    <form action="${pageContext.request.contextPath}" class="form-inline navbar-form" method="GET">
        <div inline="" class="option">
            <select  name="markId" id="markId" onchange="this.form.submit()">
                <c:if  test="${current!=null}">
                    <option value="${current.id}">${current.markAuto}</option>
                    <option value="-1">Выберите Марку</option>
                </c:if>
                <c:if test="${current == null}">
                    <option value="-1">Выберите Марку</option>
                </c:if>
                <c:forEach var="mark" items="${marks}">
                    <c:if test="${current.markAuto!=mark.markAuto}">
                        <option value="${mark.id}">${mark.markAuto}</option>
                    </c:if>
                </c:forEach>
            </select>
        </div>
        <div inline="" class="option">
            <select name="modelId" id="modelId">
                <option value="0">Выберите Модель</option>
                <c:forEach var="model" items="${models}">
                    <option value="${model.id}">${model.modelAuto}</option>
                </c:forEach>
            </select>
        </div>
        <div inline="" class="option">
            <input title="" name="YearOfIssueFrom" size="16" id="YearOfIssueFrom" placeholder="Год выпуска с">
        </div>
        <div inline="" class="option">
            <input title=""  name="YearOfIssueTo" size="16" id="YearOfIssueTo" placeholder="Год выпуска по">
        </div>
        <div inline="" class="option">
            <input title=""  name="PriceFrom" size="16" id="PriceFrom" placeholder="Цена с $">
        </div>
        <div inline="" class="option">
            <input title=""  name="PriceTo" size="16" id="PriceTo" placeholder="Цена по $">
        </div>
        <div inline="" class="option">
            <button submit="submit" formaction="${pageContext.request.contextPath}/search" type="submit">Submit</button>
        </div>
    </form>
</div>
<div class="col-md-2">
    <aside class="aside">
        <ul>
            <li><a href="#">Alfa Romeo</a></li>
            <li><a href="#">Acura</a></li>
            <li><a href="#">Audi</a></li>
            <li><a href="#">BMW</a></li>
            <li><a href="#">Caddilac</a></li>
            <li><a href="#">Chevrolet</a></li>
            <li><a href="#">Chrysler</a></li>
            <li><a href="#">Citroen</a></li>
            <li><a href="#">Daewoo</a></li>
            <li><a href="#">Dodge</a></li>
            <li><a href="#">Fiat</a></li>
            <li><a href="#">Ford</a></li>
        </ul>
    </aside>
</div>
<div class="col-md-2">
    <aside class="aside">
        <ul>
            <li><a href="#">Honda</a></li>
            <li><a href="#">Hyundai</a></li>
            <li><a href="#">Infiniti</a></li>
            <li><a href="#">Jaguar</a></li>
            <li><a href="#">Jeep</a></li>
            <li><a href="#">Kia</a></li>
            <li><a href="#">Lada</a></li>
            <li><a href="#">Lancia</a></li>
            <li><a href="#">Land Rover</a></li>
            <li><a href="#">Lexus</a></li>
            <li><a href="#">Mazda</a></li>
            <li><a href="#">Mercedes-Benz</a></li>
        </ul>
    </aside>
</div>
<div class="col-md-4">
    <div id="locations" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" class="cars">
            <div class="item active">
                <a class="carousel" href="#">
                    <img src="${pageContext.request.contextPath}/resources/images/typoi.gif" alt=""> </a>
                <div class="carousel-caption">
                    <h3> News </h3>
                </div>
            </div>
            <div class="item">
                <a class="carousel" href="#">
                    <img src="${pageContext.request.contextPath}/resources/images/nikulin.gif" alt=""> </a>
                <div class="carousel-caption">
                    <h3> NEWS </h3>
                </div>
            </div>
            <div class="item">
                <a class="carousel" href="#">
                    <img src="${pageContext.request.contextPath}/resources/images/mers.jpg" alt=""> </a>
                <div class="carousel-caption">
                    <h3> News </h3>
                </div>
            </div>
            <div class="item">
                <a class="carousel" href="#">
                    <img src="${pageContext.request.contextPath}/resources/images/audi.jpg" alt="">
                </a>
                <div class="carousel-caption">
                    <h3> Новость </h3>
                </div>
            </div>
            <div class="item">
                <a class="carousel" href="#">
                    <img src="${pageContext.request.contextPath}/resources/images/porsh.jpg" alt=""></a>
                <div class="carousel-caption">
                    <h3> Something new </h3>
                </div>
            </div>
            <div class="item">
                <a class="carousel" href="#">
                    <img src="${pageContext.request.contextPath}/resources/images/vaz.jpg" alt=""></a>
                <div class="carousel-caption">
                    <h6> NEWS </h6>
                </div>
            </div>
        </div>
        <a class="left carousel-control" href="#locations" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a class="right carousel-control" href="#locations" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span></a>
    </div>
</div>
<div class="col-md-2">
    <aside class="aside">
        <ul>
            <li><a href="#">Mitsubishi</a></li>
            <li><a href="#">Nissan</a></li>
            <li><a href="#">Opel</a></li>
            <li><a href="#">Peugeot</a></li>
            <li><a href="#">Porshe</a></li>
            <li><a href="#">Renault</a></li>
            <li><a href="#">Rover</a></li>
            <li><a href="#">Saab</a></li>
            <li><a href="#">Seat</a></li>
            <li><a href="#">Skoda</a></li>
            <li><a href="#">Subaru</a></li>
            <li><a href="#">Suzuki</a></li>
        </ul>
    </aside>
</div>
<div class="col-md-2">
    <aside class="aside">
        <ul>
            <li><a href="#">Toyota</a></li>
            <li><a href="#">Volkswagen</a></li>
            <li><a href="#">Volvo</a></li>
            <li><a href="#">Mocквич</a></li>
            <li><a href="#">УАЗ</a></li>
            <li><a href="#">ГАЗ</a></li>
            <li><a href="#">МАЗ</a></li>
            <li><a href="#">КАМАЗ</a></li>
            <li><a href="#">Волга</a></li>
            <li><a href="#">Cherry</a></li>
            <li><a href="#">Great Wall</a></li>
            <li><a href="#">Lincoln</a></li>
        </ul>
    </aside>
</div>
