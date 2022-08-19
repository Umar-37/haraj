<script>
	export let bodyTEXT = 'لايوجد نص';
	export let imagesList = [''];
	export let thumbURL = 'https://lightwidget.com/wp-content/uploads/local-file-not-found.png';
	export let authorUsername = 'none';
	export let title = 'none';
	export let city = 'none';
	// @ts-ignore
	export let postDate = '';

	postDate = new Date(parseInt(postDate) * 1000).toLocaleString('en-US');

	if (bodyTEXT == '') bodyTEXT = 'لايوجد نص';

	if (imagesList.length == 0)
		imagesList = ['https://lightwidget.com/wp-content/uploads/local-file-not-found.png'];

	if (thumbURL == '')
		thumbURL = 'https://lightwidget.com/wp-content/uploads/local-file-not-found.png';
</script>

<div class="wrapper">
	<div class="postWrapper">
		<div class="postMain">
			<div class="details">
				<div class="post_header">
					<div class="post_header_wrapper">
						<h1>{title}</h1>
						<div class="post_header_meta">
							<div>
								<span class="post_header_meta_item"
									><span class="def_username">Y</span><a
										href="https://haraj.com.sa/users/{authorUsername}"
										><span class="author">{authorUsername}</span></a
									></span
								><span class="post_header_meta_item time_wrapper">
									<div class="Tooltip-Wrapper">
										<span id="post_time"
											><svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="sync-alt"
												class="svg-inline--fa fa-sync-alt fa-w-16 "
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"
												/>
											</svg><span style="direction:ltr ;">{postDate}</span></span
										>
									</div>
								</span>
							</div>
							<div>
								<span class="post_header_meta_item"
									><svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="map-marker-alt"
										class="svg-inline--fa fa-map-marker-alt fa-w-12 "
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 384 512"
										color="#1073c0"
									>
										<path
											fill="currentColor"
											d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
										/>
									</svg><a href="https://haraj.com.sa/city/%D8%AC%D8%AF%D9%87"
										><span class="city">{city}</span></a
									></span
								>
							</div>
						</div>
					</div>
				</div>
				<div class="post_body">
					<article class="">{bodyTEXT}</article>

					<span class="img_wrapper">
						{#if imagesList.length > 0}
							{#each imagesList as img}
								<!-- content here -->
								<img
									srcset={img}
									sizes="(max-width: 767px) 400px, (max-width: 767px) 700px 2x"
									alt={title}
									loading="lazy"
									width="800"
									height="1057"
								/>
								<br />
								<br />
							{/each}
                        {:else}
                        <img
									srcset={`https://thumbcdn.haraj.com.sa/${thumbURL}/114x114/webp, https://thumbcdn.haraj.com.sa/${thumbURL}/170x170/webp 2x`}
									sizes="(max-width: 767px) 400px, (max-width: 767px) 700px 2x"
									alt={title}
									loading="lazy"
									width="800"
									height="1057"
								/>
								<br />
								<br />
						{/if}
					</span>

					<div class="post_extra_info" />
				</div>
			</div>
		</div>
	</div>
</div>
