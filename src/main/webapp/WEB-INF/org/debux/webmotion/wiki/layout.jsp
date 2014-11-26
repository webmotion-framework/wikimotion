<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<fmt:setBundle basename="bundle.wikimotion"/>

<!DOCTYPE html>
<!--
  #%L
  WebMotion wiki
  
  $Id$
  $HeadURL$
  %%
  Copyright (C) 2011 - 2012 Debux
  %%
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU Lesser General Public License as 
  published by the Free Software Foundation, either version 3 of the 
  License, or (at your option) any later version.
  
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Lesser Public License for more details.
  
  You should have received a copy of the GNU General Lesser Public 
  License along with this program.  If not, see
  <http://www.gnu.org/licenses/lgpl-3.0.html>.
  #L%
-->

<html lang="${language}">
    <head>       
        <meta charset="utf-8">
        <title>${site_name}</title>

        <link rel="icon" type="image/png" href="<c:url value="/static/img/favicon.png"/>">
        <link rel="shortcut icon" type="image/x-icon" href="<c:url value="/static/img/favicon.ico"/>">
        
        <!-- Le HTML5 shim, for IE6-8 support of HTML elements --> 
        <!--[if lt IE 9]>
          <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]--> 
        
        <!-- Le styles --> 
        <link rel="stylesheet" href="<c:url value="/js/bootstrap/css/bootstrap.css"/>">
        <link rel="stylesheet" href="<c:url value="/js/prettify/prettify.css"/>" type="text/css"/>
        
        <script src="http://code.jquery.com/jquery-1.7.2.min.js"></script> 
        <script type="text/javascript" src="<c:url value="/js/prettify/prettify.js"/>"></script>
        <script type="text/javascript" src="<c:url value="/js/bootstrap/js/bootstrap.js"/>"></script>
        
        <style>
            /* Override some defaults */
            html, body {
                background-color: #eee;
            }
            
            body {
                padding-top: 40px; /* 40px to make the container go all the way to the bottom of the topbar */
            }
            
            @media (max-width: 980px) {
                body {
                    padding-top: 0;
                }
                .navbar-fixed-top {
                    margin-bottom: 0px;
                }
            }
            
            .content {
                background-color: #fff;
                padding: 20px;
                -webkit-border-radius: 0 0 6px 6px;
                   -moz-border-radius: 0 0 6px 6px;
                        border-radius: 0 0 6px 6px;
                -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.15);
                   -moz-box-shadow: 0 1px 2px rgba(0,0,0,.15);
                        box-shadow: 0 1px 2px rgba(0,0,0,.15);
              }
        </style>
    </head>

    <body onload="prettyPrint()">

        <div class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container-fluid">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> 
                        <span class="icon-bar"></span> 
                        <span class="icon-bar"></span> 
                        <span class="icon-bar"></span> 
                    </a>
                    
                    <a class="brand" href="<c:url value="/"/>">${site_name}</a>

                    <div class="nav-collapse">
                        <jsp:include page="/header?sub=include" />
                    
                        <ul class="nav pull-right">
                            <c:forEach items="${languages}" var="lang">
                                <li><a href="<c:url value="/?language=${lang}"/>">${lang}</a></li>
                            </c:forEach>

                            <c:if test="${current_user == null}">
                                <li><a href="<c:url value="/login"/>"><fmt:message key="wiki.login"/></a></li>
                            </c:if>
                            <c:if test="${current_user != null}">
                                <li><a href="<c:url value="/logout"/>"><fmt:message key="wiki.logout"/>${current_user.name}</a></li>
                            </c:if>
                        </ul>
                    </div>
                </div> 
            </div>
        </div>

        <div class="container">
            <div class="content">
                <jsp:include page="${layout_url}" />
            </div>
        </div>
            
        <hr/>
        <jsp:include page="/footer?sub=include" />

    </body>
</html>
