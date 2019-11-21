<?php

function get_file_size( $fileurl ){
	$mfile = str_replace( site_url('/'), ABSPATH, strip_tags( $fileurl ) );
	if ( is_file( $mfile ) ){
		$filesize = size_format( filesize( $mfile ) );
		return $filesize;
	}
}
