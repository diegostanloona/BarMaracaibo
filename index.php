<?php get_header();?>
        
<?php $texts = get_field('textos');?>
<?php $imgs = get_field('imagenes');?>
<?php $audio = get_field('audio');?>

    <div class="controls">
        <div class="barsMenu">
            <i class="fas fa-bars fa-3x"></i>
        </div>
        <div class="pause">
            <i class="fas fa-pause fa-3x"></i>
            <!--             <i class="fas fa-volume-up"></i>
 -->
        </div>
        <div class="direccion">
            <a target="_blank" href="<?php echo $texts['direccion_url'];?>"><?php echo $texts['direccion']; ?></a>
        </div>
        <div class="social">
           <a href="<?php echo $texts['facebook'];?>" target="_blank"><i class="fab fa-facebook-square fa-3x"></i></a>
           <a href="<?php echo $texts['instagram'];?>" target="_blank"><i class="fab fa-instagram fa-3x"></i></a>
           <a href="mailto:<?php echo $texts['email'];?>"><i class="fas fa-envelope fa-3x"></i></a>
        </div>
        <div class="tracker">
            <ul>
                <li class="active"> <i class="fas fa-circle"></i></li>
                <li> <i class="fas fa-circle"></i></li>
                <li> <i class="fas fa-circle"></i></li>
                <li> <i class="fas fa-circle"></i></li>
            </ul>
        </div>
        <div class="next">
            <i class="fas fa-chevron-down fa-3x"></i>
        </div>
    </div>
    <div class="slides">
        <div class="slide active">
            <img src="<?php echo $imgs['slide_1'];?>" alt="">
            <div class="logo">
                <img width="100%" src="<?php echo $imgs['logo'];?>" alt="">
            </div>
        </div>
        <div class="slide">
            <img class="toggle menuToggle" src="<?php echo $imgs['slide_2'];?>" alt="">
            <div class="fooddrinks menuToggle">
               <?php echo $texts['titulo_seccion_menu'];?>
            </div>
        </div>
        <div class="slide">
            <a href="<?php echo $texts['spotify_url'];?>" class="spotifyLink"></a>
            <h2 align="center" class="title musicToggle"><?php echo $texts['titulo_seccion_music'];?></h2>
            <img class="mrcmusic toggle musicToggle" src="<?php echo $imgs['slide_3'];?>" alt="">
            <div class="playmusic musicToggle">
               <?php echo $texts['texto_seccion_music'];?>
            </div>
        </div>
        <div class="slide">
            <ul class="contact">

                                            <h2 align="center"><?php echo $texts['titulo_seccion_contact'];?></h2>

            	<li><a href="tel:<?php echo $texts['numero_telefonico'];?>"><i class="fas fa-phone-square-alt"></i><?php echo $texts['numero_telefonico'];?></a></li>
            	<li><a href="mailto:<?php echo $texts['email'];?>"><i class="fas fa-envelope"></i><?php echo $texts['email'];?></a></li>
            	<li><a target="_blank" href="<?php echo $texts['direccion_url'];?>"><i class="fas fa-map-marker-alt"></i><?php echo $texts['direccion'] ?></a></li>
            </ul>
            <img src="<?php echo $imgs['slide_4'];?>" alt="">
        </div>
    </div>
    <div class="sideNav">
        <i class="fas fa-times fa-3x"></i>
        <ul>
            <li class="active"><?php echo $texts['nombre_slide_1'];?></li>
            <li><?php echo $texts['nombre_slide_2'];?></li>
            <li><?php echo $texts['nombre_slide_3'];?></li>
            <li><?php echo $texts['nombre_slide_4'];?></li>
        </ul>
    </div>
    <div class="menu">
        <i class="fas fa-times fa-3x menuToggle"></i>
    	<span class="language">ENG</span>
        <iframe 
        srcdoc="<html>
                    <head>
                        <style>
                            img, body{
                                background-color: #fff; width:100%;
                                
                                }
                            body{background-image: url('https://assets.materialup.com/uploads/e21b405b-4e2a-48dc-9181-625a37c1eae8/preview.gif');background-repeat:no-repeat;
background-position:center 50px;margin:0; } #carta_ingles{display:none;}</style></head><body><img id='carta_castellano' src='<?php echo $imgs['carta_castellano'];?>' alt=''><img id='carta_ingles' src='<?php echo $imgs['carta_ingles'];?>' alt=''></body></html>"></iframe>

    </div>
    <div class="antesala">
        <div class="left"></div>
        <div class="right"></div>
        <h2 class="entrar">Entrar</h2>
    </div>
    <audio id="player" controls autoplay loop><source src="<?php echo $audio['audio'];?>" type="audio/mp3"></audio>

        
<?php get_footer();?>