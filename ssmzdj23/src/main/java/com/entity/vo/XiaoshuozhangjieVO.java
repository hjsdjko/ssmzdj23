package com.entity.vo;

import com.entity.XiaoshuozhangjieEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
 

/**
 * 小说章节
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2021-03-13 11:26:32
 */
public class XiaoshuozhangjieVO  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 小说名称
	 */
	
	private String xiaoshuomingcheng;
		
	/**
	 * 图片封面
	 */
	
	private String tupianfengmian;
		
	/**
	 * 章节
	 */
	
	private Integer zhangjie;
		
	/**
	 * 用户账号
	 */
	
	private String yonghuzhanghao;
		
	/**
	 * 用户姓名
	 */
	
	private String yonghuxingming;
		
	/**
	 * 章节内容
	 */
	
	private String zhangjieneirong;
		
	/**
	 * 用户id
	 */
	
	private Long userid;
				
	
	/**
	 * 设置：小说名称
	 */
	 
	public void setXiaoshuomingcheng(String xiaoshuomingcheng) {
		this.xiaoshuomingcheng = xiaoshuomingcheng;
	}
	
	/**
	 * 获取：小说名称
	 */
	public String getXiaoshuomingcheng() {
		return xiaoshuomingcheng;
	}
				
	
	/**
	 * 设置：图片封面
	 */
	 
	public void setTupianfengmian(String tupianfengmian) {
		this.tupianfengmian = tupianfengmian;
	}
	
	/**
	 * 获取：图片封面
	 */
	public String getTupianfengmian() {
		return tupianfengmian;
	}
				
	
	/**
	 * 设置：章节
	 */
	 
	public void setZhangjie(Integer zhangjie) {
		this.zhangjie = zhangjie;
	}
	
	/**
	 * 获取：章节
	 */
	public Integer getZhangjie() {
		return zhangjie;
	}
				
	
	/**
	 * 设置：用户账号
	 */
	 
	public void setYonghuzhanghao(String yonghuzhanghao) {
		this.yonghuzhanghao = yonghuzhanghao;
	}
	
	/**
	 * 获取：用户账号
	 */
	public String getYonghuzhanghao() {
		return yonghuzhanghao;
	}
				
	
	/**
	 * 设置：用户姓名
	 */
	 
	public void setYonghuxingming(String yonghuxingming) {
		this.yonghuxingming = yonghuxingming;
	}
	
	/**
	 * 获取：用户姓名
	 */
	public String getYonghuxingming() {
		return yonghuxingming;
	}
				
	
	/**
	 * 设置：章节内容
	 */
	 
	public void setZhangjieneirong(String zhangjieneirong) {
		this.zhangjieneirong = zhangjieneirong;
	}
	
	/**
	 * 获取：章节内容
	 */
	public String getZhangjieneirong() {
		return zhangjieneirong;
	}
				
	
	/**
	 * 设置：用户id
	 */
	 
	public void setUserid(Long userid) {
		this.userid = userid;
	}
	
	/**
	 * 获取：用户id
	 */
	public Long getUserid() {
		return userid;
	}
			
}
