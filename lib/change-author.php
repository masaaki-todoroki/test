<?


function myplugin_add_custom_box()
{
	if (function_exists('add_meta_box')) {
		add_meta_box('myplugin_sectionid', __('作成者', 'myplugin_textdomain'), 'post_author_meta_box', 'news', 'advanced');
	}
}
add_action('admin_menu', 'myplugin_add_custom_box');
