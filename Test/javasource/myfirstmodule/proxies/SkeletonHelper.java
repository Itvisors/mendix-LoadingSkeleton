// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package myfirstmodule.proxies;

public class SkeletonHelper
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject skeletonHelperMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "MyFirstModule.SkeletonHelper";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		DataLoaded("DataLoaded"),
		DataLoaded2("DataLoaded2");

		private java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public SkeletonHelper(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "MyFirstModule.SkeletonHelper"));
	}

	protected SkeletonHelper(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject skeletonHelperMendixObject)
	{
		if (skeletonHelperMendixObject == null)
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		if (!com.mendix.core.Core.isSubClassOf("MyFirstModule.SkeletonHelper", skeletonHelperMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a MyFirstModule.SkeletonHelper");

		this.skeletonHelperMendixObject = skeletonHelperMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'SkeletonHelper.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static myfirstmodule.proxies.SkeletonHelper initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return myfirstmodule.proxies.SkeletonHelper.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static myfirstmodule.proxies.SkeletonHelper initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new myfirstmodule.proxies.SkeletonHelper(context, mendixObject);
	}

	public static myfirstmodule.proxies.SkeletonHelper load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return myfirstmodule.proxies.SkeletonHelper.initialize(context, mendixObject);
	}

	/**
	 * Commit the changes made on this proxy object.
	 */
	public final void commit() throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Commit the changes made on this proxy object using the specified context.
	 */
	public final void commit(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Delete the object.
	 */
	public final void delete()
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}

	/**
	 * Delete the object using the specified context.
	 */
	public final void delete(com.mendix.systemwideinterfaces.core.IContext context)
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}
	/**
	 * @return value of DataLoaded
	 */
	public final java.lang.Boolean getDataLoaded()
	{
		return getDataLoaded(getContext());
	}

	/**
	 * @param context
	 * @return value of DataLoaded
	 */
	public final java.lang.Boolean getDataLoaded(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Boolean) getMendixObject().getValue(context, MemberNames.DataLoaded.toString());
	}

	/**
	 * Set value of DataLoaded
	 * @param dataloaded
	 */
	public final void setDataLoaded(java.lang.Boolean dataloaded)
	{
		setDataLoaded(getContext(), dataloaded);
	}

	/**
	 * Set value of DataLoaded
	 * @param context
	 * @param dataloaded
	 */
	public final void setDataLoaded(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Boolean dataloaded)
	{
		getMendixObject().setValue(context, MemberNames.DataLoaded.toString(), dataloaded);
	}

	/**
	 * @return value of DataLoaded2
	 */
	public final java.lang.Boolean getDataLoaded2()
	{
		return getDataLoaded2(getContext());
	}

	/**
	 * @param context
	 * @return value of DataLoaded2
	 */
	public final java.lang.Boolean getDataLoaded2(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Boolean) getMendixObject().getValue(context, MemberNames.DataLoaded2.toString());
	}

	/**
	 * Set value of DataLoaded2
	 * @param dataloaded2
	 */
	public final void setDataLoaded2(java.lang.Boolean dataloaded2)
	{
		setDataLoaded2(getContext(), dataloaded2);
	}

	/**
	 * Set value of DataLoaded2
	 * @param context
	 * @param dataloaded2
	 */
	public final void setDataLoaded2(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Boolean dataloaded2)
	{
		getMendixObject().setValue(context, MemberNames.DataLoaded2.toString(), dataloaded2);
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return skeletonHelperMendixObject;
	}

	/**
	 * @return the IContext instance of this proxy, or null if no IContext instance was specified at initialization.
	 */
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this)
			return true;

		if (obj != null && getClass().equals(obj.getClass()))
		{
			final myfirstmodule.proxies.SkeletonHelper that = (myfirstmodule.proxies.SkeletonHelper) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

	/**
	 * @return String name of this class
	 */
	public static java.lang.String getType()
	{
		return "MyFirstModule.SkeletonHelper";
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@java.lang.Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}
