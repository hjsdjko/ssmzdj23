package com.entity.view;

import com.entity.XiaoshuozixunEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 小说资讯
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-03-13 11:26:32
 */
@TableName("xiaoshuozixun")
public class XiaoshuozixunView  extends XiaoshuozixunEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public XiaoshuozixunView(){
	}
 
 	public XiaoshuozixunView(XiaoshuozixunEntity xiaoshuozixunEntity){
 	try {
			BeanUtils.copyProperties(this, xiaoshuozixunEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
